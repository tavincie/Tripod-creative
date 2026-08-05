'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Check, MessageCircle, X } from 'lucide-react';
import {
  BOOKING_WHATSAPP_URL,
  bookingAddOns,
  bookingPackagesByService,
  bookingServiceIds,
  budgetRangeIds,
  paymentPolicyIds,
  serviceNoteIdsByService,
  type BookingAddOnId,
  type BookingPackage,
  type BookingPackageId,
  type BookingPrice,
  type BookingServiceId,
  type BudgetRangeId,
} from '@/data/bookingPackages';
import { Button } from '@/components/ui/Button';

type BookingFieldId =
  | 'fullName'
  | 'phone'
  | 'email'
  | 'serviceType'
  | 'packageId'
  | 'preferredDate'
  | 'preferredTime'
  | 'location'
  | 'budgetRange'
  | 'projectDetails';

type BookingErrors = Partial<Record<BookingFieldId, string>>;

interface BookingFormValues {
  fullName: string;
  phone: string;
  email: string;
  serviceType: BookingServiceId | '';
  packageId: BookingPackageId | '';
  preferredDate: string;
  preferredTime: string;
  location: string;
  budgetRange: BudgetRangeId | '';
  addOnIds: BookingAddOnId[];
  projectDetails: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialValues: BookingFormValues = {
  fullName: '',
  phone: '',
  email: '',
  serviceType: '',
  packageId: '',
  preferredDate: '',
  preferredTime: '',
  location: '',
  budgetRange: '',
  addOnIds: [],
  projectDetails: '',
};

const requiredFields: BookingFieldId[] = [
  'fullName',
  'phone',
  'email',
  'serviceType',
  'packageId',
  'preferredDate',
  'preferredTime',
  'location',
  'budgetRange',
  'projectDetails',
];

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute('hidden'));
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const tBooking = useTranslations('Booking');
  const tCommon = useTranslations('Common');
  const formId = useId();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const [values, setValues] = useState<BookingFormValues>(initialValues);
  const [errors, setErrors] = useState<BookingErrors>({});

  const packageOptions: readonly BookingPackage[] = values.serviceType
    ? bookingPackagesByService[values.serviceType]
    : [];
  const selectedPackage = packageOptions.find(
    (bookingPackage) => bookingPackage.id === values.packageId,
  );
  const selectedServiceNoteId =
    values.serviceType && values.serviceType in serviceNoteIdsByService
      ? serviceNoteIdsByService[values.serviceType as keyof typeof serviceNoteIdsByService]
      : undefined;

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    previousActiveElementRef.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    const focusTimer = window.setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusableElements = getFocusableElements(dialogRef.current);
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElementRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const fieldId = (field: BookingFieldId) => `${formId}-${field}`;
  const errorId = (field: BookingFieldId) => `${fieldId(field)}-error`;

  const formatPriceLabel = (price: BookingPrice) => {
    if (price.kind === 'custom') {
      return tBooking('price.custom');
    }

    return tBooking(`price.${price.kind}`, { price: price.amount });
  };

  const getPackageDisplayLabel = (bookingPackage: BookingPackage) => {
    const name = tBooking(`packages.${bookingPackage.id}.name`);
    const price = formatPriceLabel(bookingPackage.price);

    return name === price ? name : `${name} - ${price}`;
  };

  const clearFieldError = (field: BookingFieldId) => {
    setErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const updateValue = <Field extends Exclude<keyof BookingFormValues, 'addOnIds'>>(
    field: Field,
    value: BookingFormValues[Field],
  ) => {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    if (requiredFields.includes(field as BookingFieldId)) {
      clearFieldError(field as BookingFieldId);
    }
  };

  const handleServiceChange = (serviceType: BookingServiceId | '') => {
    setValues((currentValues) => ({
      ...currentValues,
      serviceType,
      packageId: '',
    }));

    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };
      delete nextErrors.serviceType;
      delete nextErrors.packageId;
      return nextErrors;
    });
  };

  const toggleAddOn = (addOnId: BookingAddOnId) => {
    setValues((currentValues) => {
      const hasAddOn = currentValues.addOnIds.includes(addOnId);

      return {
        ...currentValues,
        addOnIds: hasAddOn
          ? currentValues.addOnIds.filter((currentAddOnId) => currentAddOnId !== addOnId)
          : [...currentValues.addOnIds, addOnId],
      };
    });
  };

  const validateForm = () => {
    const nextErrors: BookingErrors = {};

    requiredFields.forEach((field) => {
      if (!String(values[field]).trim()) {
        nextErrors[field] = tBooking(`validation.${field}`);
      }
    });

    setErrors(nextErrors);
    return nextErrors;
  };

  const focusFirstError = (nextErrors: BookingErrors) => {
    const firstErrorField = requiredFields.find((field) => Boolean(nextErrors[field]));

    if (!firstErrorField) {
      return;
    }

    window.setTimeout(() => {
      document.getElementById(fieldId(firstErrorField))?.focus();
    }, 0);
  };

  const getSelectedAddOnLabels = () => (
    bookingAddOns
      .filter((addOn) => values.addOnIds.includes(addOn.id))
      .map((addOn) => (
        `${tBooking(`addOns.items.${addOn.id}.name`)} - ${formatPriceLabel(addOn.price)}`
      ))
  );

  const buildWhatsAppMessage = () => {
    const addOnsLabel = getSelectedAddOnLabels().join(', ') || tBooking('whatsapp.none');
    const serviceLabel = values.serviceType ? tBooking(`services.${values.serviceType}`) : '';
    const packageLabel = selectedPackage ? getPackageDisplayLabel(selectedPackage) : '';
    const budgetLabel = values.budgetRange ? tBooking(`budgetRanges.${values.budgetRange}`) : '';

    return [
      tBooking('whatsapp.greeting'),
      '',
      tBooking('whatsapp.intro'),
      '',
      `${tBooking('whatsapp.labels.name')}\n${values.fullName.trim()}`,
      `${tBooking('whatsapp.labels.phone')}\n${values.phone.trim()}`,
      `${tBooking('whatsapp.labels.email')}\n${values.email.trim()}`,
      `${tBooking('whatsapp.labels.service')}\n${serviceLabel}`,
      `${tBooking('whatsapp.labels.package')}\n${packageLabel}`,
      `${tBooking('whatsapp.labels.preferredDate')}\n${values.preferredDate}`,
      `${tBooking('whatsapp.labels.preferredTime')}\n${values.preferredTime}`,
      `${tBooking('whatsapp.labels.location')}\n${values.location.trim()}`,
      `${tBooking('whatsapp.labels.budgetRange')}\n${budgetLabel}`,
      `${tBooking('whatsapp.labels.addOns')}\n${addOnsLabel}`,
      `${tBooking('whatsapp.labels.projectDetails')}\n${values.projectDetails.trim()}`,
      '',
      tBooking('whatsapp.closing'),
    ].join('\n');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }

    const whatsappUrl = `${BOOKING_WHATSAPP_URL}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (!whatsappWindow) {
      window.location.assign(whatsappUrl);
    }
  };

  return (
    <div
      className="booking-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="film-modal booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${formId}-title`}
        aria-describedby={`${formId}-subtitle`}
        tabIndex={-1}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={tCommon('close')}
          className="film-modal__close booking-modal__close"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="booking-modal__chrome" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="booking-modal__header">
          <p className="film-kicker">
            <span className="film-rec-dot" aria-hidden="true" />
            {tBooking('modal.eyebrow')}
          </p>
          <h2 id={`${formId}-title`}>{tBooking('modal.title')}</h2>
          <p id={`${formId}-subtitle`}>{tBooking('modal.subtitle')}</p>
        </div>

        <form className="booking-modal__layout" onSubmit={handleSubmit} noValidate>
          <div className="booking-modal__form">
            <div className="booking-field-grid booking-field-grid--two">
              <div className="booking-field">
                <label htmlFor={fieldId('fullName')}>{tBooking('fields.fullName.label')}</label>
                <input
                  ref={firstFieldRef}
                  id={fieldId('fullName')}
                  type="text"
                  value={values.fullName}
                  onChange={(event) => updateValue('fullName', event.target.value)}
                  placeholder={tBooking('fields.fullName.placeholder')}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? errorId('fullName') : undefined}
                />
                {errors.fullName && (
                  <p id={errorId('fullName')} className="booking-field__error" role="alert">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="booking-field">
                <label htmlFor={fieldId('phone')}>{tBooking('fields.phone.label')}</label>
                <input
                  id={fieldId('phone')}
                  type="tel"
                  value={values.phone}
                  onChange={(event) => updateValue('phone', event.target.value)}
                  placeholder={tBooking('fields.phone.placeholder')}
                  autoComplete="tel"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? errorId('phone') : undefined}
                />
                {errors.phone && (
                  <p id={errorId('phone')} className="booking-field__error" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="booking-field-grid booking-field-grid--two">
              <div className="booking-field">
                <label htmlFor={fieldId('email')}>{tBooking('fields.email.label')}</label>
                <input
                  id={fieldId('email')}
                  type="email"
                  value={values.email}
                  onChange={(event) => updateValue('email', event.target.value)}
                  placeholder={tBooking('fields.email.placeholder')}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? errorId('email') : undefined}
                />
                {errors.email && (
                  <p id={errorId('email')} className="booking-field__error" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="booking-field">
                <label htmlFor={fieldId('serviceType')}>{tBooking('fields.serviceType.label')}</label>
                <select
                  id={fieldId('serviceType')}
                  value={values.serviceType}
                  onChange={(event) => handleServiceChange(event.target.value as BookingServiceId | '')}
                  aria-invalid={Boolean(errors.serviceType)}
                  aria-describedby={errors.serviceType ? errorId('serviceType') : undefined}
                >
                  <option value="">{tBooking('fields.serviceType.placeholder')}</option>
                  {bookingServiceIds.map((serviceId) => (
                    <option key={serviceId} value={serviceId}>
                      {tBooking(`services.${serviceId}`)}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p id={errorId('serviceType')} className="booking-field__error" role="alert">
                    {errors.serviceType}
                  </p>
                )}
              </div>
            </div>

            <fieldset
              id={fieldId('packageId')}
              className="booking-package-picker"
              aria-describedby={errors.packageId ? errorId('packageId') : undefined}
              tabIndex={-1}
            >
              <legend>{tBooking('fields.package.label')}</legend>
              {packageOptions.length > 0 ? (
                <div className="booking-package-picker__grid">
                  {packageOptions.map((bookingPackage) => (
                    <label key={bookingPackage.id} className="booking-package-card">
                      <input
                        type="radio"
                        name={`${formId}-package`}
                        value={bookingPackage.id}
                        checked={values.packageId === bookingPackage.id}
                        onChange={() => updateValue('packageId', bookingPackage.id as BookingPackageId)}
                      />
                      <span className="booking-package-card__content">
                        <span className="booking-package-card__name">
                          {tBooking(`packages.${bookingPackage.id}.name`)}
                        </span>
                        <span className="booking-package-card__price">
                          {formatPriceLabel(bookingPackage.price)}
                        </span>
                      </span>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="booking-package-picker__empty">
                  {tBooking('fields.serviceType.placeholder')}
                </p>
              )}
              {errors.packageId && (
                <p id={errorId('packageId')} className="booking-field__error" role="alert">
                  {errors.packageId}
                </p>
              )}
            </fieldset>

            <div className="booking-field-grid booking-field-grid--three">
              <div className="booking-field">
                <label htmlFor={fieldId('preferredDate')}>{tBooking('fields.preferredDate.label')}</label>
                <input
                  id={fieldId('preferredDate')}
                  type="date"
                  value={values.preferredDate}
                  onChange={(event) => updateValue('preferredDate', event.target.value)}
                  aria-invalid={Boolean(errors.preferredDate)}
                  aria-describedby={errors.preferredDate ? errorId('preferredDate') : undefined}
                />
                {errors.preferredDate && (
                  <p id={errorId('preferredDate')} className="booking-field__error" role="alert">
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              <div className="booking-field">
                <label htmlFor={fieldId('preferredTime')}>{tBooking('fields.preferredTime.label')}</label>
                <input
                  id={fieldId('preferredTime')}
                  type="time"
                  value={values.preferredTime}
                  onChange={(event) => updateValue('preferredTime', event.target.value)}
                  aria-invalid={Boolean(errors.preferredTime)}
                  aria-describedby={errors.preferredTime ? errorId('preferredTime') : undefined}
                />
                {errors.preferredTime && (
                  <p id={errorId('preferredTime')} className="booking-field__error" role="alert">
                    {errors.preferredTime}
                  </p>
                )}
              </div>

              <div className="booking-field">
                <label htmlFor={fieldId('budgetRange')}>{tBooking('fields.budgetRange.label')}</label>
                <select
                  id={fieldId('budgetRange')}
                  value={values.budgetRange}
                  onChange={(event) => updateValue('budgetRange', event.target.value as BudgetRangeId | '')}
                  aria-invalid={Boolean(errors.budgetRange)}
                  aria-describedby={errors.budgetRange ? errorId('budgetRange') : undefined}
                >
                  <option value="">{tBooking('fields.budgetRange.placeholder')}</option>
                  {budgetRangeIds.map((budgetRangeId) => (
                    <option key={budgetRangeId} value={budgetRangeId}>
                      {tBooking(`budgetRanges.${budgetRangeId}`)}
                    </option>
                  ))}
                </select>
                {errors.budgetRange && (
                  <p id={errorId('budgetRange')} className="booking-field__error" role="alert">
                    {errors.budgetRange}
                  </p>
                )}
              </div>
            </div>

            <div className="booking-field">
              <label htmlFor={fieldId('location')}>{tBooking('fields.location.label')}</label>
              <input
                id={fieldId('location')}
                type="text"
                value={values.location}
                onChange={(event) => updateValue('location', event.target.value)}
                placeholder={tBooking('fields.location.placeholder')}
                autoComplete="street-address"
                aria-invalid={Boolean(errors.location)}
                aria-describedby={errors.location ? errorId('location') : undefined}
              />
              {errors.location && (
                <p id={errorId('location')} className="booking-field__error" role="alert">
                  {errors.location}
                </p>
              )}
            </div>

            <fieldset className="booking-addons">
              <legend>{tBooking('addOns.title')}</legend>
              <p>{tBooking('addOns.hint')}</p>
              <div className="booking-addons__grid">
                {bookingAddOns.map((addOn) => (
                  <label key={addOn.id} className="booking-addon-card">
                    <input
                      type="checkbox"
                      checked={values.addOnIds.includes(addOn.id)}
                      onChange={() => toggleAddOn(addOn.id)}
                    />
                    <span className="booking-addon-card__mark" aria-hidden="true">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="booking-addon-card__text">
                      <span>{tBooking(`addOns.items.${addOn.id}.name`)}</span>
                      <span>{formatPriceLabel(addOn.price)}</span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="booking-field">
              <label htmlFor={fieldId('projectDetails')}>{tBooking('fields.projectDetails.label')}</label>
              <textarea
                id={fieldId('projectDetails')}
                value={values.projectDetails}
                onChange={(event) => updateValue('projectDetails', event.target.value)}
                placeholder={tBooking('fields.projectDetails.placeholder')}
                rows={5}
                aria-invalid={Boolean(errors.projectDetails)}
                aria-describedby={errors.projectDetails ? errorId('projectDetails') : undefined}
              />
              {errors.projectDetails && (
                <p id={errorId('projectDetails')} className="booking-field__error" role="alert">
                  {errors.projectDetails}
                </p>
              )}
            </div>
          </div>

          <aside className="booking-modal__summary" aria-label={tBooking('modal.boardLabel')}>
            {selectedPackage ? (
              <div className="booking-summary-card">
                <p className="booking-summary-card__label">{tBooking('summary.selectedPackage')}</p>
                <h3>{tBooking(`packages.${selectedPackage.id}.name`)}</h3>
                <span>{formatPriceLabel(selectedPackage.price)}</span>
                <p>{tBooking(`packages.${selectedPackage.id}.description`)}</p>

                {selectedPackage.includeIds && selectedPackage.includeIds.length > 0 && (
                  <div className="booking-summary-card__includes">
                    <p>{tBooking('summary.includes')}</p>
                    <ul>
                      {selectedPackage.includeIds.map((includeId) => (
                        <li key={includeId}>{tBooking(`includes.${includeId}`)}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedServiceNoteId && (
                  <div className="booking-summary-card__note">
                    <p>{tBooking('summary.serviceNote')}</p>
                    <span>{tBooking(`serviceNotes.${selectedServiceNoteId}`)}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="booking-summary-card booking-summary-card--empty">
                <p className="booking-summary-card__label">{tBooking('summary.emptyTitle')}</p>
                <span>{tBooking('summary.emptyBody')}</span>
              </div>
            )}

            <div className="booking-policy-card">
              <h3>{tBooking('payment.title')}</h3>
              <ul>
                {paymentPolicyIds.map((policyId) => (
                  <li key={policyId}>{tBooking(`payment.items.${policyId}`)}</li>
                ))}
              </ul>
              <p>{tBooking('payment.confirmation')}</p>
            </div>

            <div className="booking-selected-addons">
              <p>{tBooking('summary.selectedAddOns')}</p>
              <span>
                {getSelectedAddOnLabels().join(', ') || tBooking('summary.noAddOns')}
              </span>
            </div>

            <Button type="submit" variant="primary" className="booking-modal__submit">
              {tBooking('whatsapp.submit')}
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </Button>
          </aside>
        </form>
      </div>
    </div>
  );
}

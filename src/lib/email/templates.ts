/**
 * Branded HTML email templates for Carina Pereira International.
 *
 * Design system:
 *   Cream:   #FFFEF3  (backgrounds)
 *   Pink:    #F1A0C5  (secondary accent)
 *   Orange:  #FA7E39  (CTA buttons)
 *   Magenta: #E62E6B  (accent / links)
 *
 * All templates use table-based layout and inline CSS for maximum
 * email-client compatibility across Gmail, Outlook, Apple Mail, etc.
 */

// ── Brand constants ────────────────────────────────────────────────
const BRAND = {
  name: 'Carina Pereira International',
  tagline: 'Make-up made easy with Carina',
  logoUrl: 'https://carinapereira.com/images/nav/logo.png',
  siteUrl: 'https://carinapereira.com',
  address: '13 Drama Street, Somerset West, Cape Town, 7130',
  emailInfo: 'info@carinapereira.com',
  emailMakeup: 'makeup@carinapereira.com',
  instagram: 'https://www.instagram.com/carinapereirainternational',
  facebook: 'https://www.facebook.com/CarinaPereiraMakeUpInternational',
  colors: {
    cream: '#FFFEF3',
    creamDark: '#FFF8D7',
    pink: '#F1A0C5',
    pinkLight: '#FEF5FA',
    pinkDark: '#B3386B',
    orange: '#FA7E39',
    orangeLight: '#FFF4ED',
    orangeDark: '#C75316',
    magenta: '#E62E6B',
    magentaLight: '#FDD9E6',
    magentaDark: '#8A0E39',
    white: '#FFFFFF',
    textDark: '#3D3D3D',
    textMedium: '#666666',
    textLight: '#999999',
  },
};

// ── Shared helpers ─────────────────────────────────────────────────

function fontStack(type: 'display' | 'body' | 'accent'): string {
  switch (type) {
    case 'display':
      return "'Georgia', 'Times New Roman', serif";
    case 'body':
      return "'Inter', 'Helvetica Neue', Arial, sans-serif";
    case 'accent':
      return "'Inter', 'Helvetica Neue', Arial, sans-serif";
  }
}

function button(text: string, url?: string): string {
  const href = url || BRAND.siteUrl;
  return `
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="margin: 28px auto 0;">
      <tr>
        <td align="center" style="border-radius: 8px; background-color: ${BRAND.colors.orange};">
          <a href="${href}" target="_blank" style="display: inline-block; padding: 14px 36px; font-family: ${fontStack('body')}; font-size: 15px; font-weight: 600; color: ${BRAND.colors.white}; text-decoration: none; border-radius: 8px; letter-spacing: 0.5px;">
            ${text}
          </a>
        </td>
      </tr>
    </table>`;
}

function divider(): string {
  return `
    <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="margin: 24px 0;">
      <tr>
        <td style="border-top: 1px solid ${BRAND.colors.creamDark}; font-size: 0; line-height: 0;">&nbsp;</td>
      </tr>
    </table>`;
}

// ── Base layout wrapper ────────────────────────────────────────────

function baseLayout(content: string, preheader?: string): string {
  const preheaderHtml = preheader
    ? `<div style="display:none;font-size:1px;color:#FFFEF3;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">${preheader}</div>`
    : '';

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>${BRAND.name}</title>
  <!--[if mso]>
  <noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
  <![endif]-->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; }
    @media only screen and (max-width: 620px) {
      .email-container { width: 100% !important; max-width: 100% !important; }
      .fluid { max-width: 100% !important; width: 100% !important; }
      .stack-column { display: block !important; width: 100% !important; }
      .content-padding { padding-left: 20px !important; padding-right: 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: ${BRAND.colors.cream}; font-family: ${fontStack('body')}; -webkit-font-smoothing: antialiased;">
  ${preheaderHtml}

  <!-- Decorative top gradient bar -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="height: 5px; background: linear-gradient(90deg, ${BRAND.colors.pink}, ${BRAND.colors.magenta}, ${BRAND.colors.orange});">&nbsp;</td>
    </tr>
  </table>

  <!-- Full-width outer wrapper -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${BRAND.colors.cream};">
    <tr>
      <td align="center" style="padding: 24px 16px 0;">

        <!-- Email container (max 580px) -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="580" class="email-container" style="max-width: 580px; width: 100%;">

          <!-- Logo / Header -->
          <tr>
            <td align="center" style="padding: 20px 0 24px;">
              <a href="${BRAND.siteUrl}" target="_blank">
                <img src="${BRAND.logoUrl}" alt="${BRAND.name}" width="200" style="display: block; max-width: 200px; height: auto;">
              </a>
            </td>
          </tr>

          <!-- Content card -->
          <tr>
            <td>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${BRAND.colors.white}; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); overflow: hidden;">
                <!-- Pink accent bar at top of card -->
                <tr>
                  <td style="height: 4px; background: linear-gradient(90deg, ${BRAND.colors.pink}, ${BRAND.colors.magenta});">&nbsp;</td>
                </tr>
                <tr>
                  <td class="content-padding" style="padding: 40px 44px;">
                    ${content}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 0 8px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <!-- Social links -->
                <tr>
                  <td align="center" style="padding-bottom: 16px;">
                    <a href="${BRAND.instagram}" target="_blank" style="display: inline-block; margin: 0 8px; color: ${BRAND.colors.magenta}; font-size: 13px; font-family: ${fontStack('body')}; text-decoration: none;">Instagram</a>
                    <span style="color: ${BRAND.colors.pink};">&middot;</span>
                    <a href="${BRAND.facebook}" target="_blank" style="display: inline-block; margin: 0 8px; color: ${BRAND.colors.magenta}; font-size: 13px; font-family: ${fontStack('body')}; text-decoration: none;">Facebook</a>
                    <span style="color: ${BRAND.colors.pink};">&middot;</span>
                    <a href="${BRAND.siteUrl}" target="_blank" style="display: inline-block; margin: 0 8px; color: ${BRAND.colors.magenta}; font-size: 13px; font-family: ${fontStack('body')}; text-decoration: none;">Website</a>
                  </td>
                </tr>
                <!-- Address -->
                <tr>
                  <td align="center" style="font-family: ${fontStack('body')}; font-size: 12px; color: ${BRAND.colors.textLight}; line-height: 18px; padding-bottom: 8px;">
                    ${BRAND.address}
                  </td>
                </tr>
                <!-- Brand name -->
                <tr>
                  <td align="center" style="font-family: ${fontStack('display')}; font-size: 13px; color: ${BRAND.colors.pink}; letter-spacing: 1px; padding-bottom: 24px;">
                    ${BRAND.name}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- /email-container -->
      </td>
    </tr>
  </table>

  <!-- Bottom decorative bar -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td style="height: 4px; background: linear-gradient(90deg, ${BRAND.colors.orange}, ${BRAND.colors.magenta}, ${BRAND.colors.pink});">&nbsp;</td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Detail row helper for "key: value" lists ───────────────────────

function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding: 6px 0; font-family: ${fontStack('body')}; font-size: 13px; color: ${BRAND.colors.textLight}; width: 120px; vertical-align: top;">${label}</td>
      <td style="padding: 6px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; vertical-align: top;">${value}</td>
    </tr>`;
}

function detailTable(rows: [string, string][]): string {
  return `
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 16px 0;">
      ${rows.map(([label, value]) => detailRow(label, value)).join('')}
    </table>`;
}

// ═══════════════════════════════════════════════════════════════════
// TEMPLATE FUNCTIONS
// ═══════════════════════════════════════════════════════════════════

/**
 * Contact form — admin notification
 */
export function contactAdminTemplate(data: {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}): string {
  const content = `
    <h1 style="margin: 0 0 8px; font-family: ${fontStack('display')}; font-size: 22px; color: ${BRAND.colors.magentaDark}; font-weight: normal;">
      New Contact Form Submission
    </h1>
    <p style="margin: 0 0 24px; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textMedium};">
      Someone has reached out through your website contact form.
    </p>

    ${divider()}

    ${detailTable([
      ['Name', `${data.firstName} ${data.lastName}`],
      [
        'Email',
        `<a href="mailto:${data.email}" style="color: ${BRAND.colors.magenta}; text-decoration: none;">${data.email}</a>`,
      ],
    ])}

    <div style="margin: 20px 0; padding: 16px 20px; background-color: ${BRAND.colors.pinkLight}; border-left: 3px solid ${BRAND.colors.pink}; border-radius: 0 8px 8px 0;">
      <p style="margin: 0 0 4px; font-family: ${fontStack('body')}; font-size: 12px; color: ${BRAND.colors.textLight}; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
      <p style="margin: 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px; white-space: pre-wrap;">${data.message}</p>
    </div>

    <div style="margin: 24px 0 0; text-align: center;">
      <a href="mailto:${data.email}?subject=Re:%20Your%20inquiry" style="display: inline-block; padding: 14px 32px; background-color: ${BRAND.colors.magenta}; color: ${BRAND.colors.white}; text-decoration: none; border-radius: 8px; font-family: ${fontStack('body')}; font-size: 15px; font-weight: 600;">
        ✉️ Reply to ${data.firstName}
      </a>
    </div>
  `;

  return baseLayout(
    content,
    `New contact from ${data.firstName} ${data.lastName}`,
  );
}

/**
 * Enrollment — admin notification
 */
export function enrollmentAdminTemplate(data: {
  fullName: string;
  email: string;
  countryCode: string;
  cellphone: string;
  address: string;
  program: string;
  paymentMethod: string;
}): string {
  const content = `
    <h1 style="margin: 0 0 8px; font-family: ${fontStack('display')}; font-size: 22px; color: ${BRAND.colors.magentaDark}; font-weight: normal;">
      New Enrollment Received
    </h1>
    <p style="margin: 0 0 4px; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textMedium};">
      A new student has enrolled in the <strong style="color: ${BRAND.colors.orange};">${data.program}</strong> program.
    </p>

    ${divider()}

    ${detailTable([
      ['Student', data.fullName],
      [
        'Email',
        `<a href="mailto:${data.email}" style="color: ${BRAND.colors.magenta}; text-decoration: none;">${data.email}</a>`,
      ],
      ['Phone', `${data.countryCode} ${data.cellphone}`],
      ['Address', data.address],
      ['Program', data.program],
      ['Payment', data.paymentMethod],
    ])}

    <div style="margin: 24px 0; text-align: center;">
      <a href="mailto:${data.email}?subject=Re:%20${encodeURIComponent(data.program)}%20enrollment" style="display: inline-block; padding: 14px 32px; background-color: ${BRAND.colors.magenta}; color: ${BRAND.colors.white}; text-decoration: none; border-radius: 8px; font-family: ${fontStack('body')}; font-size: 15px; font-weight: 600;">
        ✉️ Reply to ${data.fullName.split(' ')[0]}
      </a>
    </div>

    ${button('Visit Website', BRAND.siteUrl)}
  `;

  return baseLayout(
    content,
    `New enrollment: ${data.fullName} — ${data.program}`,
  );
}

/**
 * Enrollment — student confirmation
 */
export function enrollmentStudentTemplate(data: {
  fullName: string;
  program: string;
}): string {
  const content = `
    <h1 style="margin: 0 0 8px; font-family: ${fontStack('display')}; font-size: 24px; color: ${BRAND.colors.magentaDark}; font-weight: normal;">
      You're In!
    </h1>
    <p style="margin: 0 0 24px; font-family: ${fontStack('body')}; font-size: 16px; color: ${BRAND.colors.textMedium}; line-height: 24px;">
      Hi <strong>${data.fullName}</strong>, we're so excited to have you join our <strong style="color: ${BRAND.colors.orange};">${data.program}</strong> — it's going to be a fun and transformative experience!
    </p>

    ${divider()}

    <!-- What happens next -->
    <h2 style="margin: 0 0 16px; font-family: ${fontStack('display')}; font-size: 18px; color: ${BRAND.colors.pinkDark}; font-weight: normal;">
      What Happens Next
    </h2>

    <!-- Secure your spot -->
    <div style="margin: 0 0 20px; padding: 20px 24px; background-color: ${BRAND.colors.orangeLight}; border-radius: 10px;">
      <h3 style="margin: 0 0 8px; font-family: ${fontStack('body')}; font-size: 15px; color: ${BRAND.colors.orangeDark}; font-weight: 600;">
        Secure Your Spot
      </h3>
      <p style="margin: 0 0 12px; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">
        To confirm your place, a <strong>50% deposit</strong> of the course fee is required. The remaining balance is due one week before the course begins.
      </p>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${BRAND.colors.white}; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style="padding: 16px 20px;">
            ${detailTable([
              ['Bank', 'Capitec'],
              ['Account Name', 'Carina Pereira'],
              ['Account Type', 'Savings'],
              ['Account No.', '1485816058'],
              ['Branch Code', '470010'],
            ])}
            <p style="margin: 8px 0 0; font-family: ${fontStack('body')}; font-size: 13px; color: ${BRAND.colors.textMedium}; line-height: 20px;">
              Use your <strong>full name + course title</strong> as your payment reference.
            </p>
          </td>
        </tr>
      </table>
      <p style="margin: 12px 0 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">
        Then email your proof of payment and this enrolment form to:
        <a href="mailto:${BRAND.emailMakeup}" style="color: ${BRAND.colors.magenta}; text-decoration: none; font-weight: 600;">${BRAND.emailMakeup}</a>
      </p>
    </div>

    <!-- Important notes -->
    <div style="margin: 0 0 20px; padding: 20px 24px; background-color: ${BRAND.colors.pinkLight}; border-radius: 10px;">
      <h3 style="margin: 0 0 12px; font-family: ${fontStack('body')}; font-size: 15px; color: ${BRAND.colors.pinkDark}; font-weight: 600;">
        Important Notes
      </h3>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr><td style="padding: 4px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">&#8226;&nbsp; All payments are non-refundable.</td></tr>
        <tr><td style="padding: 4px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">&#8226;&nbsp; Missing more than 5 classes without a medical note will result in failing the course.</td></tr>
        <tr><td style="padding: 4px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">&#8226;&nbsp; If payment isn't completed on time, your seat may be given to someone else.</td></tr>
        <tr><td style="padding: 4px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">&#8226;&nbsp; Classes start on time — latecomers will need to catch up independently.</td></tr>
        <tr><td style="padding: 4px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">&#8226;&nbsp; Public holidays are accounted for — extra days will be added.</td></tr>
        <tr><td style="padding: 4px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">&#8226;&nbsp; Top students may join real-world shoots for hands-on experience!</td></tr>
      </table>
    </div>

    <p style="margin: 0 0 4px; font-family: ${fontStack('body')}; font-size: 15px; color: ${BRAND.colors.textDark}; line-height: 24px;">
      We can't wait to meet you and start this journey together. You're going to learn so much, and we're here to support you every step of the way.
    </p>

    <p style="margin: 16px 0 0; font-family: ${fontStack('display')}; font-size: 15px; color: ${BRAND.colors.pinkDark}; line-height: 22px;">
      With love,<br>
      The Carina Pereira Team
    </p>
  `;

  return baseLayout(
    content,
    `Welcome to ${data.program} — here's what to do next`,
  );
}

/**
 * Newsletter subscription — admin notification
 */
export function subscribeAdminTemplate(data: {
  fullName: string;
  email: string;
}): string {
  const content = `
    <h1 style="margin: 0 0 8px; font-family: ${fontStack('display')}; font-size: 22px; color: ${BRAND.colors.magentaDark}; font-weight: normal;">
      New Newsletter Subscriber
    </h1>
    <p style="margin: 0 0 24px; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textMedium};">
      A new subscriber has joined your mailing list.
    </p>

    ${divider()}

    ${detailTable([
      ['Name', data.fullName],
      [
        'Email',
        `<a href="mailto:${data.email}" style="color: ${BRAND.colors.magenta}; text-decoration: none;">${data.email}</a>`,
      ],
    ])}

    <div style="margin: 20px 0 0; padding: 12px 16px; background-color: ${BRAND.colors.orangeLight}; border-radius: 8px;">
      <p style="margin: 0; font-family: ${fontStack('body')}; font-size: 13px; color: ${BRAND.colors.textMedium}; line-height: 20px;">
        This subscriber has been automatically added to your Mailchimp mailing list.
      </p>
    </div>
  `;

  return baseLayout(content, `New subscriber: ${data.fullName}`);
}

/**
 * Valentine's Day — admin notification
 */
export function valentinesAdminTemplate(data: {
  fullName: string;
  email: string;
  countryCode: string;
  cellphone: string;
  address: string;
}): string {
  const content = `
    <h1 style="margin: 0 0 8px; font-family: ${fontStack('display')}; font-size: 22px; color: ${BRAND.colors.magentaDark}; font-weight: normal;">
      New Valentine's Day Booking
    </h1>
    <p style="margin: 0 0 24px; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textMedium};">
      Someone has booked a spot at the Valentine's Day Makeup Masterclass!
    </p>

    ${divider()}

    ${detailTable([
      ['Name', data.fullName],
      [
        'Email',
        `<a href="mailto:${data.email}" style="color: ${BRAND.colors.magenta}; text-decoration: none;">${data.email}</a>`,
      ],
      ['Phone', `${data.countryCode} ${data.cellphone}`],
      ['Address', data.address],
    ])}

    <div style="margin: 24px 0 0; text-align: center;">
      <a href="mailto:${data.email}?subject=Re:%20Valentine's%20Day%20booking" style="display: inline-block; padding: 14px 32px; background-color: ${BRAND.colors.magenta}; color: ${BRAND.colors.white}; text-decoration: none; border-radius: 8px; font-family: ${fontStack('body')}; font-size: 15px; font-weight: 600;">
        ✉️ Reply to ${data.fullName.split(' ')[0]}
      </a>
    </div>
  `;

  return baseLayout(content, `Valentine's booking: ${data.fullName}`);
}

/**
 * Valentine's Day — user confirmation
 */
export function valentinesUserTemplate(data: { fullName: string }): string {
  const content = `
    <h1 style="margin: 0 0 8px; font-family: ${fontStack('display')}; font-size: 24px; color: ${BRAND.colors.magentaDark}; font-weight: normal;">
      You're Booked!
    </h1>
    <p style="margin: 0 0 24px; font-family: ${fontStack('body')}; font-size: 16px; color: ${BRAND.colors.textMedium}; line-height: 24px;">
      Hi <strong>${data.fullName}</strong>, thank you for booking your spot for our Valentine's Day Makeup Masterclass! We're so thrilled to have you join us for this intimate and beautiful celebration.
    </p>

    ${divider()}

    <!-- Payment section -->
    <div style="margin: 0 0 20px; padding: 20px 24px; background-color: ${BRAND.colors.orangeLight}; border-radius: 10px;">
      <h3 style="margin: 0 0 8px; font-family: ${fontStack('body')}; font-size: 15px; color: ${BRAND.colors.orangeDark}; font-weight: 600;">
        Make Your Payment
      </h3>
      <p style="margin: 0 0 12px; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">
        To secure your seat, please make the <strong>full payment of R600</strong> to the account below:
      </p>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${BRAND.colors.white}; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style="padding: 16px 20px;">
            ${detailTable([
              ['Bank', 'Capitec'],
              ['Account Name', 'Carina Pereira'],
              ['Account Type', 'Savings'],
              ['Account No.', '1485816058'],
              ['Branch Code', '470010'],
            ])}
            <p style="margin: 8px 0 0; font-family: ${fontStack('body')}; font-size: 13px; color: ${BRAND.colors.textMedium}; line-height: 20px;">
              Use your <strong>full name + "Valentine's Day"</strong> as the payment reference.
            </p>
          </td>
        </tr>
      </table>
      <p style="margin: 12px 0 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">
        Once paid, kindly email your <strong>proof of payment</strong> and this booking confirmation to:
        <a href="mailto:${BRAND.emailMakeup}" style="color: ${BRAND.colors.magenta}; text-decoration: none; font-weight: 600;">${BRAND.emailMakeup}</a>
      </p>
    </div>

    <!-- Event details -->
    <div style="margin: 0 0 20px; padding: 20px 24px; background-color: ${BRAND.colors.magentaLight}; border-radius: 10px;">
      <h3 style="margin: 0 0 12px; font-family: ${fontStack('body')}; font-size: 15px; color: ${BRAND.colors.magentaDark}; font-weight: 600;">
        Event Details
      </h3>
      ${detailTable([
        ['Date', 'Saturday, 21st February 2026'],
        ['Time', '1pm — 4pm'],
        ['Venue', BRAND.address],
      ])}
    </div>

    <!-- What's included -->
    <div style="margin: 0 0 20px; padding: 20px 24px; background-color: ${BRAND.colors.pinkLight}; border-radius: 10px;">
      <h3 style="margin: 0 0 12px; font-family: ${fontStack('body')}; font-size: 15px; color: ${BRAND.colors.pinkDark}; font-weight: 600;">
        What's Included
      </h3>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr><td style="padding: 4px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">&#8226;&nbsp; Curated Make-Up Goodie Bags — including a special Silki surprise</td></tr>
        <tr><td style="padding: 4px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">&#8226;&nbsp; Sweet Treats &amp; Refreshments</td></tr>
        <tr><td style="padding: 4px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">&#8226;&nbsp; Shop New Designs from The Shopaholic</td></tr>
        <tr><td style="padding: 4px 0; font-family: ${fontStack('body')}; font-size: 14px; color: ${BRAND.colors.textDark}; line-height: 22px;">&#8226;&nbsp; 1:1 Time With Carina — Up Close &amp; Personal</td></tr>
      </table>
    </div>

    <!-- Important notes -->
    <div style="margin: 0 0 20px; padding: 16px 20px; background-color: ${BRAND.colors.cream}; border-left: 3px solid ${BRAND.colors.pink}; border-radius: 0 8px 8px 0;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
        <tr><td style="padding: 3px 0; font-family: ${fontStack('body')}; font-size: 13px; color: ${BRAND.colors.textMedium}; line-height: 20px;">&#8226;&nbsp; All payments are non-refundable.</td></tr>
        <tr><td style="padding: 3px 0; font-family: ${fontStack('body')}; font-size: 13px; color: ${BRAND.colors.textMedium}; line-height: 20px;">&#8226;&nbsp; Please arrive on time — the event flows from start to finish.</td></tr>
        <tr><td style="padding: 3px 0; font-family: ${fontStack('body')}; font-size: 13px; color: ${BRAND.colors.textMedium}; line-height: 20px;">&#8226;&nbsp; If you can't make it without prior notice, your seat may be given away.</td></tr>
      </table>
    </div>

    <p style="margin: 0 0 4px; font-family: ${fontStack('body')}; font-size: 15px; color: ${BRAND.colors.textDark}; line-height: 24px;">
      We can't wait to share this incredible experience with you. Come as you are — this is a day to relax, recharge, and celebrate <em>you</em>.
    </p>

    <p style="margin: 16px 0 0; font-family: ${fontStack('display')}; font-size: 15px; color: ${BRAND.colors.pinkDark}; line-height: 22px;">
      With love,<br>
      The Carina Pereira Team
    </p>
  `;

  return baseLayout(
    content,
    `You're booked for Valentine's Day — here's what to expect`,
  );
}

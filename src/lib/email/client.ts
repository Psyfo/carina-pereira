/**
 * Shared ZeptoMail client initialisation helper.
 *
 * Centralises config so every route gets:
 *   - the correct API URL
 *   - the send-mail token
 *   - the mail_agent_alias
 *   - standard from / recipient addresses
 */

import { SendMailClient } from 'zeptomail';

import logger from '@/lib/logger';

export interface ZeptoMailConfig {
  client: SendMailClient;
  from: { address: string; name: string };
  recipientEmail: string;
}

/**
 * Initialise a ready-to-use ZeptoMail client with all brand defaults.
 * Throws if the token is missing.
 */
export function getZeptoMailClient(): ZeptoMailConfig {
  const url =
    process.env.ZEPTOMAIL_API_URL || 'https://api.zeptomail.com/v1.1/email';
  const token = process.env.ZEPTOMAIL_SEND_MAIL_TOKEN;

  if (!token) {
    logger.error('ZeptoMail API token is not configured');
    throw new Error('ZeptoMail API token is not configured');
  }

  const from = {
    address: process.env.ZEPTOMAIL_FROM_EMAIL || 'info@carinapereira.com',
    name: process.env.ZEPTOMAIL_FROM_NAME || 'Carina Pereira International',
  };

  const recipientEmail =
    process.env.ZEPTOMAIL_RECIPIENT_EMAIL || 'info@carinapereira.com';

  const client = new SendMailClient({ url, token });

  logger.info('ZeptoMail client initialised', {
    url,
    from: from.address,
    recipientEmail,
  });

  return { client, from, recipientEmail };
}

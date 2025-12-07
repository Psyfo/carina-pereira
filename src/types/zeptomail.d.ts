declare module 'zeptomail' {
  export interface ClientParams {
    url: string;
    token: string;
  }

  export interface EmailAddress {
    address: string;
    name?: string;
  }

  export interface FromAddress {
    address: string;
    name?: string;
  }

  export interface ToRecipient {
    email_address: EmailAddress;
  }

  export interface ReplyTo {
    address: string;
    name?: string;
  }

  export interface Sendmail {
    from: FromAddress;
    to: ToRecipient[];
    subject: string;
    textbody?: string;
    htmlbody?: string;
    cc?: ToRecipient[];
    bcc?: ToRecipient[];
    reply_to?: ReplyTo[];
    attachments?: Array<{
      name: string;
      content: string;
      mime_type: string;
    }>;
    inline_images?: Array<{
      content: string;
      mime_type: string;
      cid: string;
    }>;
  }

  export interface SendmailBatch {
    from: FromAddress;
    to: ToRecipient[];
    subject?: string;
    textbody?: string;
    htmlbody?: string;
    cc?: ToRecipient[];
    bcc?: ToRecipient[];
    reply_to?: ReplyTo[];
  }

  export interface TemplateQueryParams {
    from: FromAddress;
    to: Array<{
      email_address: EmailAddress;
      merge_info?: Record<string, string>;
    }>;
    template_key: string;
    merge_info?: Record<string, string>;
  }

  export interface TemplateBatchParams {
    from: FromAddress;
    to: Array<{
      email_address: EmailAddress;
      merge_info?: Record<string, string>;
    }>;
    template_key: string;
  }

  export class SendMailClient {
    constructor(options: ClientParams, clientOption?: Record<string, unknown>);
    sendMail(options: Sendmail): Promise<unknown>;
    sendBatchMail(options: SendmailBatch): Promise<unknown>;
    sendMailWithTemplate(options: TemplateQueryParams): Promise<unknown>;
    mailBatchWithTemplate(options: TemplateBatchParams): Promise<unknown>;
  }
}

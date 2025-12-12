import type { IFileOutput } from '../../../api/files/types'

import { mimeTypes } from 'mimetype-constants/src'

import { Uploader } from '../base/Uploader'

export class MetadataOnlyUploader extends Uploader<IFileOutput> {
  protected _execute(): Promise<IFileOutput> {
    return this.fetcher
      .setBody(this.requestBody, mimeTypes.application.json)
      .fetchJson()
  }
}

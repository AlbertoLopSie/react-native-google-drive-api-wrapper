import { createTypeGroup, extend } from 'mimetype-constants/src'

const APP_DATA_FOLDER_ID = 'appDataFolder'
const ROOT_FOLDER_ID = 'root'

const MIME_TYPES = extend(
  createTypeGroup('application', {
    vndGoogleAppsFolder: 'vnd.google-apps.folder'
  })
)

export { APP_DATA_FOLDER_ID, MIME_TYPES, ROOT_FOLDER_ID }

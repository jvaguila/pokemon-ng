export enum ICONS {
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  SAVE = 'SAVE',
  CLOSE = 'CLOSE',
  ADD = 'ADD',
  SEARCH = 'SEARCH',
}

export type ICON_TYPE =
  | ICONS.DELETE
  | ICONS.EDIT
  | ICONS.SAVE
  | ICONS.CLOSE
  | ICONS.ADD;

export enum VARIANT_BUTTTON {
  PRIMARY = 'primary',
  NONE = 'none',
}

export type VARIANT_TYPE = VARIANT_BUTTTON.PRIMARY | VARIANT_BUTTTON.NONE;

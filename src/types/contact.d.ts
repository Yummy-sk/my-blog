export interface IInputHoverState {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

export interface IInputState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IFormState {
  isLoading: boolean;
  error: string;
  values: IInputState;
}

import { createAction, props } from '@ngrx/store';

export const setFormData = createAction('', props<{game:any}>());

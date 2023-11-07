export interface InputField {
  label: string;
  title: string;
  placeholder: string;
}

const inputFields: InputField[] = [
  {
    label: 'Current Password *',
    title: 'oldPassword',
    placeholder: 'Enter your current password',
  },
  {
    label: 'New password *',
    title: 'password',
    placeholder: 'Enter your new password',
  },
  {
    label: 'Confirm password *',
    title: 'comfirmedPassword',
    placeholder: 'Confirm your new password',
  },
];

export default inputFields;

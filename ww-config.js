export default {
  editor: {
    label: { en: 'Spread Auth Session' },
    icon: 'lock',
    categories: ['other'],
  },
  properties: {
    supabaseUrl: {
      label: { en: 'Supabase URL' },
      type: 'Text',
      bindable: true,
      defaultValue: '',
      hidden: true,
    },
    supabaseAnonKey: {
      label: { en: 'Supabase Anon Key' },
      type: 'Text',
      bindable: true,
      defaultValue: '',
      hidden: true,
    },
    mode: {
      label: { en: 'Mode' },
      type: 'TextSelect',
      options: {
        options: [
          { value: 'login', label: { en: 'Login' } },
          { value: 'signup', label: { en: 'Sign Up' } },
        ],
      },
      bindable: true,
      defaultValue: 'login',
    },
    showToggle: {
      label: { en: 'Show Login/Signup Toggle' },
      type: 'OnOff',
      defaultValue: true,
    },
    showForgotPassword: {
      label: { en: 'Show Forgot Password Link' },
      type: 'OnOff',
      defaultValue: true,
    },
    heading: {
      label: { en: 'Heading Text' },
      type: 'Text',
      bindable: true,
      defaultValue: '',
      /* wwEditor:start */
      section: 'settings',
      /* wwEditor:end */
    },
    subheading: {
      label: { en: 'Subheading Text' },
      type: 'Text',
      bindable: true,
      defaultValue: '',
      /* wwEditor:start */
      section: 'settings',
      /* wwEditor:end */
    },
  },
  variables: [
    { uid: 'accessToken',            name: 'Access Token',              type: 'string',  defaultValue: '' },
    { uid: 'userId',                 name: 'User ID',                   type: 'string',  defaultValue: '' },
    { uid: 'userEmail',              name: 'User Email',                type: 'string',  defaultValue: '' },
    { uid: 'displayName',            name: 'Display Name',              type: 'string',  defaultValue: '' },
    { uid: 'portalTarget',           name: 'Portal Target',             type: 'string',  defaultValue: '' },
    { uid: 'isAuthenticated',        name: 'Is Authenticated',          type: 'boolean', defaultValue: false },
    { uid: 'primaryRole',            name: 'Primary Role',              type: 'string',  defaultValue: '' },
    { uid: 'roles',                  name: 'User Roles',                type: 'array',   defaultValue: [] },
    { uid: 'platformAccessMode',     name: 'Platform Access Mode',      type: 'string',  defaultValue: 'members_only' },
    { uid: 'nonMemberMarkupPct',     name: 'Non-Member Markup %',       type: 'number',  defaultValue: 0 },
    { uid: 'memberReserveWindowDays',name: 'Member Reserve Window Days',type: 'number',  defaultValue: 90 },
    { uid: 'isMember',               name: 'Is Member',                 type: 'boolean', defaultValue: false },
    { uid: 'householdId',            name: 'Household ID',              type: 'string',  defaultValue: '' },
    { uid: 'avatarUrl',              name: 'Avatar URL',                type: 'string',  defaultValue: '' },
  ],
  actions: [
    {
      name: 'logout',
      label: { en: 'Log Out' },
    },
  ],
  triggerEvents: [
    {
      name: 'session:ready',
      label: { en: 'On Session Ready' },
      event: {
        userId: '',
        email: '',
        displayName: '',
        accessToken: '',
        refreshToken: '',
        roles: [],
        portalTarget: '',
        primaryRole: '',
        platformAccessMode: 'members_only',
        nonMemberMarkupPct: 0,
      },
    },
    {
      name: 'session:error',
      label: { en: 'On Auth Error' },
      event: { message: '', code: '' },
    },
    {
      name: 'session:expired',
      label: { en: 'On Session Expired' },
      event: { reason: '' },
    },
    {
      name: 'session:logout',
      label: { en: 'On Logout' },
      event: {},
    },
    {
      name: 'session:signup-confirm',
      label: { en: 'On Signup Confirmation Required' },
      event: { email: '' },
    },
    {
      name: 'session:password-reset',
      label: { en: 'On Password Reset Requested' },
      event: { email: '' },
    },
    {
      name: 'signup:start-onboarding',
      label: { en: 'On Signup — Open Onboarding' },
      event: { userId: '', email: '', accessToken: '', isNewUser: true },
    },
  ],
};

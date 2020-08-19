export default {
  key: 'UserReport',
  options: {
    delay: 5000,
    attempts: 3,
  },
  async handle({ data }) {
    const { user } = data;
    console.log('UserReport: ', user);
  },
};

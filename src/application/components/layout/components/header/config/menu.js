export const getMenu = (i18n) => ([
  {
    title: i18n.t('header.apps'),
    link: '/applications',
  },
  {
    title: i18n.t('header.optify'),
    link: '/optify',
  },
  {
    title: i18n.t('header.questions'),
    link: '/faqs',
  },
  {
    title: i18n.t('header.contact'),
    link: '/contact',
  },
]);

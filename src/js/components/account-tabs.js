import GraphTabs from 'graph-tabs';

document.addEventListener('DOMContentLoaded', function (e) {
  if (document.querySelector('[data-tabs="account-tabs"]')) {
    const tabs = new GraphTabs('account-tabs');
  }
})

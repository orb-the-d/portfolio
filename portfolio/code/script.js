

document.addEventListener('DOMContentLoaded', () => {
    
    function openTab(tabName) {
      document.querySelectorAll('.tab-contents').forEach(tab => tab.classList.remove('active-tab'));
      document.querySelectorAll('.tab-links').forEach(btn => btn.classList.remove('active'));
      const btn = document.querySelector(`.tab-links[onclick="openTab('${tabName}')"]`);
      if (btn) btn.classList.add('active');
      const activeTab = document.getElementById(tabName);
      if (activeTab) activeTab.classList.add('active-tab');
    }
    window.openTab = openTab;
    openTab('skills');
  
    
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
      } else {
        alert('Please fill out all fields.');
      }
    });
  });
// Interazioni leggere per la landing page
(function(){
  const leadForm = document.getElementById('lead-form');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modal-close');
  const buyForm = document.getElementById('buy-form');

  function validateEmail(email){
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  function openModal(){
    modal.hidden = false;
  }
  function closeModal(){
    modal.hidden = true;
  }

  if(leadForm){
    leadForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      if(!email || !validateEmail(email)){
        alert('Per favore inserisci una email valida');
        return;
      }
      // Salvare in localStorage come mock di backend
      const leads = JSON.parse(localStorage.getItem('am_leads')||'[]');
      leads.push({name, email, date:new Date().toISOString()});
      localStorage.setItem('am_leads', JSON.stringify(leads));

      // Mostra modale di ringraziamento
      openModal();

      // TODO: chiamare endpoint reale per registrare il lead (es. /api/lead)
    });
  }

  if(modalClose){
    modalClose.addEventListener('click', closeModal);
  }

  if(modal){
    modal.addEventListener('click', function(e){
      if(e.target === modal) closeModal();
    });
  }

  if(buyForm){
    buyForm.addEventListener('submit', function(e){
      e.preventDefault();
      const course = document.getElementById('course-select').value;
      const email = document.getElementById('buy-email').value.trim();
      if(!validateEmail(email)){
        alert('Per favore inserisci una email valida');
        return;
      }
      // Comportamento demo: salvare e aprire pagina di ringraziamento simulata
      const purchases = JSON.parse(localStorage.getItem('am_purchases')||'[]');
      purchases.push({course, email, date:new Date().toISOString()});
      localStorage.setItem('am_purchases', JSON.stringify(purchases));
      alert('Ordine ricevuto (demo). Verrai reindirizzato alla pagina di pagamento quando integrerai un gateway.');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
})();

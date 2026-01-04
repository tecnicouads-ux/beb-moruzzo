// Evidenzia link attivo in base al pathname
(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll("[data-nav]").forEach(a=>{
    const href = (a.getAttribute("href") || "").toLowerCase();
    if(href === path) a.classList.add("active");
  });

  // Precompila il testo WhatsApp dal form (se presente)
  const form = document.querySelector("#availabilityForm");
  const waBtn = document.querySelector("#whatsappBtn");
  if(form && waBtn){
    form.addEventListener("input", ()=>{
      const name = form.querySelector("[name=name]")?.value || "";
      const guests = form.querySelector("[name=guests]")?.value || "";
      const inDate = form.querySelector("[name=checkin]")?.value || "";
      const outDate = form.querySelector("[name=checkout]")?.value || "";
      const msg = `Ciao! Sono ${name}. Vorrei info disponibilità per ${guests} ospiti a Moruzzo: dal ${inDate} al ${outDate}. Grazie!`;
      waBtn.href = "https://wa.me/393331112222?text=" + encodeURIComponent(msg);
    });
  }
})();

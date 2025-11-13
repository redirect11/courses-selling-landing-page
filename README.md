
# courses-selling-landing-page

Landing page statica per la promozione dei corsi di self-help di Antonio Manzi, rivolta a giovani (18-35 anni).

Contenuti inclusi:

- `index.html` — pagina principale con copy, sezioni (hero, corsi, testimonianze, prezzi, FAQ, CTA) e form di iscrizione.
- `assets/css/styles.css` — stili responsive, palette moderna e layout mobile-first.
- `assets/js/main.js` — interazioni leggere: validazione form, modale di ringraziamento e comportamento demo per "acquisto".

Anteprima locale (Windows / PowerShell):

```powershell
# dalla cartella del progetto
# apri la porta 8000 con un semplice server Python (se hai Python installato)
python -m http.server 8000; # poi apri http://localhost:8000

# oppure apri direttamente il file index.html nel browser
# start "" index.html
```

Nota su integrazione pagamento e raccolta lead:

- Il progetto è una demo statica: le form salvano demo-dati in `localStorage`.
- Per vendite reali integrare un gateway (es. Stripe, PayPal) e sostituire le chiamate demo con API sicure sul server.
- Aggiungere GDPR/privacy policy e gestione dei consensi per la raccolta di email.

Se vuoi, posso:

- integrare Stripe Checkout / pagamento ricorrente;
- collegare un servizio di email marketing (Mailchimp, ConvertKit) per raccogliere i lead;
- migliorare SEO (meta social, schema.org) e aggiungere test A/B per CTA.

---

Deploy come GitHub Pages
------------------------

Questa repository è pronta per essere pubblicata su GitHub Pages usando un workflow GitHub Actions che esegue il deploy del contenuto del repository sul branch `gh-pages` ad ogni push su `master`.

Cosa ho aggiunto:

- `.github/workflows/deploy.yml` — workflow che usa `JamesIves/github-pages-deploy-action` per creare/aggiornare il branch `gh-pages` con i file dal root del repo.

Come abilitare (passaggi consigliati):

1. Assicurati di aver pushed il repository su GitHub (remote `origin`).
2. Il workflow si attiverà automaticamente ad ogni push su `master` e genererà/aggiornerà il branch `gh-pages`.
3. Vai su Settings → Pages nel repository su GitHub e scegli come Source: "gh-pages branch" (Root). Dopo qualche minuto la tua site sarà disponibile all'URL mostrato lì.

Se vuoi un dominio personalizzato:

- Aggiungi un file `CNAME` nella root del repository (o nella branch `gh-pages`) contenente il dominio (es. `www.tuodominio.com`).
- Configura il CNAME/ALIAS nel pannello DNS del tuo registrar come indicato da GitHub Pages.

Nota sulla sicurezza e segreti:

- Il workflow usa `GITHUB_TOKEN` (non serve creare segreti aggiuntivi). Se preferisci deploy gestiti con chiavi SSH o altre opzioni più avanzate posso adattare il workflow.

Se vuoi, posso anche:

- creare un `CNAME` e configurare la DNS template per il tuo dominio;
- aggiungere un badge nel README che punta all'URL di GitHub Pages dopo il primo deploy;
- configurare redirect, 404 personalizzata o integrazione con Cloudflare.

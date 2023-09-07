# Artist-list
Aflevering med node.js-express.js
Artist app
Dette projekt er en full-stack webapplikation, der giver brugere mulighed for at administrere og udforske information om musikkunstnere. Applikationen omfatter både en backend og frontend, der er implementeret ved hjælp af moderne teknologier og programmeringsprincipper. Backend og frontend er forbundet gennem et REST API.

Krav
Backend skal implementere et REST API ved hjælp af Node.js og Express.js.

Der skal være endpoints for HTTP-metoderne GET, POST, PUT/PATCH, og DELETE til rådighed i routene.

Backend skal udføre CRUD-operationer på data ved at læse og skrive til en JSON-fil.

Backend skal understøtte hentning af alle kunstnere og en enkelt kunstner ved hjælp af et unikt id.

Datakilde for kunstnere er en JSON-fil, og hvert artist-objekt skal indeholde mindst følgende egenskaber: navn, fødselsdato, aktiv siden, musikgenrer, pladeselskaber, websted, billede og en kort beskrivelse.

Frontend skal implementere brugergrænsefladen (UI) ved hjælp af HTML, CSS og JavaScript.

Brugere skal have mulighed for at oprette, læse, opdatere og slette data (CRUD) om kunstnere.

Der skal implementeres filtrering og sortering af kunstnere baseret på udvalgte egenskaber.

Brugere skal kunne markere kunstnere som favoritter, og en liste over favoritkunstnere skal vises. Måden, hvorpå favoritter gemmes, er implementørens valg.

UI skal anvende CSS Grid, CSS Flex og/eller HTML Table sammen med relevante HTML-elementer.

Kode skal være opdelt i moduler for bedre organisering og vedligeholdelse.

Installation
Use the package manager pip to install foobar.

1. Klone dette repository til din lokale maskine.
2. Åbn en terminal og naviger til mappen med projektet.
3. I rodmappen, kør kommandoen `npm install` for at installere backend-afhængigheder.
4. Gå til frontend-mappen ved at køre kommandoen `cd frontend`.
5. I frontend-mappen, kør kommandoen `npm install` for at installere frontend-afhængigheder.
6. Vend tilbage til rodmappen ved at køre kommandoen `cd ..`.
Brugsanvisning
1. Start backend ved at køre kommandoen `npm start` i rodmappen.
2. Start frontend ved at navigere til frontend-mappen og køre kommandoen `npm start`.
3. for at se om serveren fungere kør komandoen ` node app.js´

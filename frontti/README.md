# Elokuvahaku- ja Suosikkisovellus

Tämä sovellus on elokuvahaku- ja suosikkilista, jossa käyttäjät voivat etsiä elokuvia, lisätä niitä suosikkeihin ja tarkastella omia suosikkejaan. Sovellus käyttää [TMDB API:ta](https://www.themoviedb.org/) elokuvien tietojen hakemiseen.

## Asennusohjeet

1. **Kloonaa projekti**:
   - Kloonaa tämä repositorio omalle koneellesi:
     ```bash
     git clone https://github.com/username/elokuvahaku.git
     ```
   
2. **Asenna riippuvuudet**:
   - Siirry projektiisi ja asenna tarvittavat npm-paketit:
     ```bash
     cd elokuvahaku
     npm install
     ```

3. **API-avaimen asetukset**:
   - Hanki oma API-avain [TMDB:n API-sivuilta](https://www.themoviedb.org/settings/api).
   - Lisää API-avain `src/services/api.js`-tiedostoon.

## Käyttöohjeet

1. **Käynnistä sovellus**:
   - Käynnistä sovellus kehitysympäristössä:
     ```bash
     npm start
     ```

2. **Elokuvien haku**:
   - Voit etsiä elokuvia hakukenttään kirjoittamalla elokuvan nimen ja painamalla "Hae"-nappia.

3. **Suosikkielokuvat**:
   - Voit lisätä elokuvia suosikkilistalle napsauttamalla "Lisää suosikiksi"-nappia.
   - Voit tarkastella suosikkielokuviasi "Suosikit"-välilehdeltä.

## Teknologiat

- **React**: Frontend-kehys
- **TMDB API**: Elokuvien tietojen haku
- **CSS**: Tyylittely

## Lisenssi

Tämä projekti on lisensoitu MIT-lisenssillä - katso [LICENSE](./LICENSE) tiedosto lisenssin yksityiskohdista.

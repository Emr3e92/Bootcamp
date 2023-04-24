window.addEventListener('load', () => {
    const div = document.querySelector('footer div')

    fetch('https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?select=nom_commune%2C%20nom_etablissement%2C%20mail&limit=25')
        .then((abc) => {
            console.log(abc);
            abc = abc.json()
            return abc
        })
})
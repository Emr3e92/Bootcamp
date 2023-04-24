window.addEventListener('load', () => {
    const div = document.querySelector('footer div')

    fetch('https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?select=nom_commune%2C%20nom_etablissement%2C%20mail&limit=25')
        .then((abc) => {
            console.log(abc)
            return abc.json()
        })
        .then((cba) => {
            let obj = cba.records;
            let text = "";
            for (let i = 0; i < obj.length; i++) {
                text += obj[i].record.fields.nom_commune + "\n" + obj[i].record.fields.nom_etablissement + "\n" + obj[i].record.fields.mail + "\n\n"

            }
            div.innerText = text
        })
})
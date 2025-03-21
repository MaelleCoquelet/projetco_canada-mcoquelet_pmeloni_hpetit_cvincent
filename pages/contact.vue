<script>

const FORMSPARK_ACTION_URL = "https://submit-form.com/0ZoXk5QrX";

export default {
    data() {
        return {
            surname: "",
            name: "",
            email: "",
            study: "",
            object: "",
            message: "",
        };
    },
    methods: {
        async submitForm() {
            await fetch(FORMSPARK_ACTION_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    surname: this.surname,
                    name: this.name,
                    email: this.email,
                    study: this.study,
                    object: this.object,
                    message: this.message,
                }),
            });
            alert("Votre message a bien été envoyé !"); 
            this.resetForm();
            window.location.reload();
        },
        resetForm() {
            this.surname = "";
            this.name = "";
            this.email = "";
            this.study = "";
            this.object = "";
            this.message = "";
        },
    },
};
</script>
<template>
    <section>
        <header
            class=" col-span-12 text-white grid grid-cols-12 bg-[url(/img/contact.jpg)] p-8 md:p-12 lg:p-16 xl:p-20">
            <h1 class="col-span-12 text-6xl md:text-8xl font-bold mt-14 sm:mt-14 md:mt-24 col-start-1 col-end-10">
                Contactez-nous !</h1>
            <p class="col-span-12 text-lg md:text-xl col-start-1 col-end-9 mt-8 sm:mt-14">Vous avez des questions, des
                suggestions ou souhaitez en savoir plus sur nos échanges au Canada ? Retrouvez-ici nos informations
                de contact, mais aussi un formulaire pour nous joindre directement !</p>
        </header>
    </section>
    <section>
        <div class="flex flex-col gap-3 bg-red-900 text-white px-8 py-8 md:px-32 py-10 text-md md:text-lg">
            <p>Nous sommes là pour vous aider à chaque étape de votre voyage. Que ce soit pour obtenir des informations
                sur
                nos programmes, comprendre les démarches à suivre, ou simplement discuter de votre intérêt pour les
                échanges
                culturels, notre équipe est à votre disposition.
                Le personnel enseignant et les étudiants impliqués dans ces échanges seront ravis de répondre à vos
                questions et de partager leur expérience.
            </p>
            <p>N'hésitez pas à nous solliciter, que ce soit pour des conseils pratiques, des recommandations ou des
                témoignages inspirants sur la vie au Canada. Nous croyons fermement qu'une communication ouverte est la
                clé
                pour réussir votre aventure internationale.</p>
        </div>
        <form @submit.prevent="submitForm">
            <div>
                <label for="surname">Prénom *</label>
                <input type="text" id="surname" name="surname" v-model="surname" placeholder="William" required="" />
            </div>
            <div>
                <label for="name">Nom *</label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Shakespeare" required="" />
            </div>
            <div>
                <label for="email">Adresse mail *</label>
                <input type="email" id="email" name="email" v-model="email" placeholder="william.shakespeare@yahoo.com"
                    required="" />
            </div>
            <div>
                <label for="study">Votre situation</label>
                <select type="text" id="study" name="study" v-model="study" required="">
                    <option value="">--Choisissez une option--</option>
                    <option value="lycee">Lycéen(ne)</option>
                    <option value="superieur">En études supérieures</option>
                    <option value="vieactive">Dans la vie active</option>
                    <option value="parent">Parent</option>
                </select>
            </div>
            <div>
                <label for="email">Objet *</label>
                <input type="text" id="object" name="object" v-model="object" placeholder="Question concernant..."
                    required="" />
            </div>
            <div>
                <label>Message *</label>
                <textarea type="text" id="name" name="message" v-model="message"
                    placeholder="Votre message ici !"></textarea>
            </div>
            <button type="submit">Envoyer</button>
        </form>
    </section>
</template>
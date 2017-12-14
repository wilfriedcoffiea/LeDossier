angular.module('starter.translate', ['pascalprecht.translate'])
.config(function($translateProvider){
	//Config language
	$translateProvider.preferredLanguage("en");
	$translateProvider.fallbackLanguage("en");
	// Enable escaping of HTML
	$translateProvider.useSanitizeValueStrategy('escapeParameters');
	//Translate for EN
	$translateProvider.translations('en', {
		disconnected: "Réseau déconnecté",
		photos: "Photos",
		videos: "Vidéos",
		latest: "NEWS",
		topnew: "À LA UNE",
		video: "VIDÉOS",
		trending: "A LIRE",
		thisArticle: "Cet article a",
		comment: "commentaire",
		comments: "commentaires",
		addComment: "Ajouter un commentaire",
		nextStory: "Prochain article",
		Comment: "Commentaire",
		noData: "Aucune donnée",
		logout: "Déconnexion",
		myBookmarks: "Mes signets",
		appSettings: "Paramètres de l'application",
		support: "Support",
		rateApp: "Notez-nous sur notre mensuel",
		shareApp: "Partager notre application",
		information: "Information",
		aboutUs: "À propos de nous \"Le Dossier\" ",
		termsOfUse: "Conditions d'utilisation",
		privacyPolicy: "Politique de confidentialité",
		version: "Version",
		versionNumber: "1.0.1",
		news: "Nouvelles",
		photo: "Photo",
		bookmark: "Favoris",
		noBookmark: "Aucun favori trouvé",
		logIn: "Connexion",
		username: "Nom d'utilisateur",
		password: "Mot de passe",
		forgotPassword: "Mot de passe oublié?",
		notMember: "Pas encore membre?",
		signUpNow: "INSCRIVEZ-VOUS MAINTENANT",
		resetPassword: "Réinitialiser le mot de passe",
		enterEmail: "Entrez votre adresse e-mail d'inscription",
		email: "E-mail",
		register: "Inscription",
		weNeed: "Nous avons besoin de plus de détails à votre sujet avant de configurer votre compte",
		firstName: "Prénom",
		lastName: "Nom",
		rePassword: "Confirmer le mot de passe",
		iAgree: "J'accepte le(s)",
		termsConditions: "Termes & Conditions",
		keyword: "Mot-clé",
		emptyList: "Liste vide",
		noResult: "Aucun résultat disponible",
	});
	//End Translate for EN
});

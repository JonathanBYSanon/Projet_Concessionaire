import Voiture from './VoitureModel.js';
import Image from './ImageModel.js';
import Couleur from './CouleurModel.js';
import Option from './OptionModel.js';
// import Modele from './ModeleModel.js';
// import Marque from './MarqueModel.js';
// import role from './RoleModel.js';
// import utilisateur from './UtilisateurModel.js';


// Definition des relations

// 1 - N marque et modele
// Modele.belongsTo(Marque);
// Marque.hasMany(Modele);

// 1 - N modele et voiture
// Voiture.belongsTo(Modele);
// Modele.hasMany(Voiture);

// 1 - 1 voiture et image
Voiture.belongsTo(Image);
Image.hasOne(Voiture);

// 1 - 1 voiture et couleur
Voiture.belongsTo(Couleur);
Couleur.hasOne(Voiture);

// N - N voiture et option
Voiture.belongsToMany(Option, { through: 'voiture_option' });
Option.belongsToMany(Voiture, { through: 'voiture_option' });

// 1 - 1 utilisateur et role
// utilisateur.belongsTo(role);
// role.hasOne(utilisateur);

export { Voiture, Image, Couleur, Option };
// export default { Marque, Modele, Voiture, Image, Couleur, Option, Role, Utilisateur };



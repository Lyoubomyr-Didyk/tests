Le cahier de tests est un document qui regroupe tous les points qui vous permettent de déterminer si votre application, site, ou d’autres services numériques correspondent bien à ce qui était attendu.

Comment rédiger un cahier de test ?

- Nom du test :  Le titre qui décrit la fonctionnalité à tester..

- ID du test :   Généralement un identifiant numérique ou alphanumérique que les testeurs utilisent pour regrouper les cas de test en suites de test.

- Objectif : Également appelé description, ce composant décrit ce que le test doit valider.
Références : Liens vers vos « user stories » et les spécifications de conception ou les exigences que le test doit vérifier.

- Conditions préalables : Toutes les conditions nécessaires pour que le testeur puisse effectuer le test.

- Configurations : Ce composant identifie ce dont le scénario de test a besoin pour fonctionner correctement, comme la version de l'application, le système d'exploitation, les exigences en matière de date et d'heure et les spécifications de sécurité.

- Étapes de test : Des descriptions détaillées des actions séquentielles qui doivent être effectuées pour terminer le test.

- Résultat attendu : Une explication de la manière dont la fonctionnalité ou le système doit réagir.


## Fonctions

1. addTask =>

Nom du test :           addTask;
ID du test:             1;
Objectif :              ajouter un element dans le tableau;
Conditions préalables : 
Configurations :
Étapes de test :        je reçois un parametre et je push dans le tableau;
Résultat attendu :      presence d'un element dans le tableau;




2. deleteTask => 

Nom du test :           deleteTask;
ID du test:             2;
Objectif :              supprimer un element de tableau;
Conditions préalables : existance d'element dans le tableau;
Configurations :
Étapes de test :        recevoir en parametre id d'element et le supprimer de tableau;
Résultat attendu :      element est supprimé de tableau;




3. modifyTask => 

Nom du test :           modifyTask;
ID du test:             3;
Objectif :              modifier un element de tableau;
Conditions préalables : existance d'element dans le tableau;
Configurations :
Étapes de test :        recevoir en parametre id d'element et le modifier;
Résultat attendu :      element est supprimé de tableau;




4. markAllAsDone => 

Nom du test :           markAllAsDone;
ID du test:             4;
Objectif :              mets status done en true pour tous les éléments;
Conditions préalables : existance au moin un élément;
Configurations :
Étapes de test :        recevoir en parametre id d'element et le modifier;
Résultat attendu :      element est supprimé de tableau;




5. markAsDone => 

Nom du test :           markAsDone;
ID du test:             5;
Objectif :              change le status d'element;
Conditions préalables : existance d'element dans le tableau;
Configurations :
Étapes de test :        recevoir en parametre id d'element, mettre status done d'élément en true;
Résultat attendu :      status done = true;



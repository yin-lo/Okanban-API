# Git Daily

1er jour

- On accepte le challenge
- On clone le repo
- On crée une branche `day-1` (`git checkout -b day-1`)
- On ajoutera la remote de correction

Tous les autres jours

- Récupérer la correction
  - je me met sur la branch master (`git checkout master`)
  - je récupère les dernières modifications (`git fetch correction && git reset --hard correction/master`)
  
Deux possibilités :
- soit on repart de la correction (`git checkout -b day-X`)
- soit vous repartez de votre code (`git checkout day-X-1 && git checkout -b day-X`)

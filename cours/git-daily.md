# Git Daily

1er jour

- On accepte le challenge
- On clone le repo
- On crée une branche `day-1` (`git checkout -b day-1`)
- On ajoutera la remote de correction

Tous les autres jours

- On s'assure d'avoir bien sauvegardé son travail
  - Si je n'ai pas encore créer de branch (`git checkout -b day-X`)
  - Je commit mon travail si je n'ai pas encore commité (`git add . && git commit -m "message"`)
  - Je sauvegarde mon travail sur mon repo github (`git push origin day-X`)

- Récupérer la correction
  - je me met sur la branch master (`git checkout master`)
  - je récupère les dernières modifications (`git fetch correction && git reset --hard correction/master`)
  
Deux possibilités :
- soit on repart de la correction (`git checkout -b day-X`)
- soit vous repartez de votre code (`git checkout day-X-1 && git checkout -b day-X`)

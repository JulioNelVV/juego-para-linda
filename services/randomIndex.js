const randomIndex = (playedIndexes, questionsListLength) => {
  let index;
  let isEqual=false;
  let i;
  index = Math.floor(Math.random() * (questionsListLength + 1));
  if (playedIndexes.length !== 0) {
    
    for(i=0;i<playedIndexes.length;i++){
      if(index===playedIndexes[i]){
        isEqual=true;
        break;
      }else{
        isEqual=false;
      }
    }
    while(isEqual){
      index = Math.floor(Math.random() * (questionsListLength + 1));
      for(i=0;i<playedIndexes.length;i++){
        if(index===playedIndexes[i]){
          isEqual=true;
          break;
        }else{
          isEqual=false;
        }
      }
    }
  }
  return index;
};
export default randomIndex;

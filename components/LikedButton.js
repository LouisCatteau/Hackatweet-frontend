function LikeButton = () => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
  

    const handleLikeClick = () => {
      
      setLiked(!liked);
      setLikesCount(prevCount => (prevLiked ? prevCount - 1 : prevCount + 1));
    } 
 return (
    <FontAwesomeIcon icon={faHeart} className={styles.like} />{props.nbLike}</div>
 )
}

    

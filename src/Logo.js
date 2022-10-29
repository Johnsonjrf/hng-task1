const Logo = ({id, src, alt, setIsShown}) => {
    return ( 
        <img id={id} src={src} alt={alt} style={{cursor:"pointer"}} onMouseEnter={ () => setIsShown(true)}
        onMouseLeave={ () => setIsShown(false)}></img>
     );
}
 
export default Logo;
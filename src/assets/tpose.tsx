type Props = {
    className?: string,
  }
  
  const TPose = ({ className }: Props) => {
    return (
      <div className={className} style={!className ? { width: 24, height: 24 } : {}}>
        <img src={"/src/assets/tpose.svg"} alt="Tpose" style={{ width: '100%', height: '100%' }} />
      </div>
    )
  }
  
  export default TPose
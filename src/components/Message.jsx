
const Message = ({type, children}) => {
  return (
    <div className={type ? `bg-red-500 py-1 px-2 rounded-md text-white` : ''}>
      <small>{children}</small>
    </div>
  )
}

export default Message
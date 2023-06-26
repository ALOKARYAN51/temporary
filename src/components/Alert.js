import { useAppContext } from "../context/appContext"

export const Alert = () => {
  const {slertType, alertText } = useAppContext()
  return (
    <div className="alert alert-${alertType}">{alertText}</div>
  )
}
export default Alert
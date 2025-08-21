import './LoadingSpinner.css'

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Yükleniyor...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner

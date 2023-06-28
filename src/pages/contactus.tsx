import React from 'react'
import GoogleMapReact from 'google-map-react'
const AnyReactComponent = ({ text }: any) => <div>{text}</div>
function ContactUs() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  }
  return (
    <>
      <div className="flex justify-end p-5">
        <div
          style={{
            height: '50vh',
            width: '50%',
            borderRadius: '10px',
            overflow: 'hidden',
          }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDZNSh_Jbmqt2K1poFQYM6VCEAVutedwQ8',
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}>
            <AnyReactComponent
              lat={35.481479}
              lng={51.081994}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </>
  )
}

export default ContactUs


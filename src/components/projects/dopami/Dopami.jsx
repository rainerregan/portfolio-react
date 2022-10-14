import React from 'react'
import Line from '../../misc/Line'
import Paragraph from '../../misc/Paragraph'
import dopamiDisplay from '../../../assets/images/dopami/dopami_display.png'
import ProjectSection from '../ProjectSection'

function Dopami() {
  return (
    <ProjectSection
      className={'bg-gradient-to-tr from-green-500 to-green-700'}
      title={"Dopami"}
      reverse={false}
      displayImage={dopamiDisplay}
      titleClassName="text-white"
      descriptionClassName='text-white'
      googlePlayLink={"https://play.google.com/store/apps/details?id=com.dopami.projecthatchedeggs"}
      >
      Dopami is a rewarding app that can give its users in-app currency, Dopa Eggs, from playing sponsored games,
          applications, and videos. Users can collect and redeem their Dopa Eggs into real rewards such as digital wallets like
          Gopay, OVO, and Dana. This app has a goal to allow users to get real money by playing games.
    </ProjectSection>
  )
}

export default Dopami
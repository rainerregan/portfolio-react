import React from 'react'
import Line from '../../misc/Line'
import Paragraph from '../../misc/Paragraph'
import dopamiDisplay1 from '../../../assets/images/dopami/dopami_display_1.png'
import dopamiDisplay2 from '../../../assets/images/dopami/dopami_display_2.png'
import ProjectSection from '../ProjectSection'

function Dopami() {
  return (
    <ProjectSection
      title={"Dopami"}
      displayImage={dopamiDisplay2}
      >
      Dopami is a rewarding app that can give its users in-app currency, Dopa Eggs, from playing sponsored games,
          applications, and videos. Users can collect and redeem their Dopa Eggs into real rewards such as digital wallets like
          Gopay, OVO, and Dana. This app has a goal to allow users to get real money by playing games.
    </ProjectSection>
  )
}

export default Dopami
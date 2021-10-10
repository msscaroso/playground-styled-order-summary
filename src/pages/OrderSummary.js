import styled from "styled-components"

import BackgroundImgSource from "./images/pattern-background-desktop.svg";
import IllustrationHero from "./images/illustration-hero.svg"
import IconMusic from "./images/icon-music.svg"


const BackGroundImage = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;

`

const Box = styled.div`
  background-color: #FFFFFF;
  margin: 102px auto 0;
  width: 450px;
  height: 697px;
  border-radius: 10px;

`

const TopImage = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

`

const Item = styled.div`
  margin: 17px auto;
  width: 396px;
  text-align: center;

`

const Title = styled(Item)`
  font-family: "Red Hat Display", sans-serif;
  color: #1F2E55;
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 37px;

`

const Description = styled(Item)`
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #717FA6;
`



const PlanBox = styled(Item)`
  background-color: #F7F9FF;
  border-radius: 10px;
  height: 98px;
  overflow: hidden;
`

const InternalPlanBox = styled.div`
  display: flex;
  margin: 25px 24px;
  justify-content: space-between;
`


const ItemBox = styled.div`
  display: flex;
`

const ChangeButton = styled(ItemBox)`
  margin-top: 15px;
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;

  text-decoration-line: underline;

  color: #382AE1;
  &:hover {
    cursor: pointer;

    color: #766CF1;
    text-decoration-line: none;

  }
`

const PlanText = styled.div`
  margin-left: 20px;
`

const AnnualPlan = styled.div`
  color: #1F2E55;
  font-family: "Red Hat Display", sans-serif;

  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 21px;

`

const Price = styled.div`
  color: #717FA6;
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

`

const ProceedToPayment = styled(Item)`
  background: #382AE1;
  box-shadow: 0 20px 20px rgba(56, 42, 225, 0.190291);
  border-radius: 11px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    background: #766CF1;
    cursor: pointer;

  }
`

const PaymentText = styled.div`
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;

  color: #FFFFFF;

`

const CancelOrder = styled(Item)`
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;

  color: #717FA6;

  margin-top: 32px;

  &:hover {
    cursor: pointer;
    color: #1F2E55;

  }
 
`


function OrderSummary() {
    return (<>
        <BackGroundImage src={BackgroundImgSource}/>
        <Box>
            <TopImage src={IllustrationHero}/>
            <div>
                <Title>Order Summary</Title>
                <Description>
                    You can now listen to millions of songs, audiobooks, and podcasts on any
                    device anywhere you like!
                </Description>
                <PlanBox>
                    <InternalPlanBox>
                            <ItemBox>
                                <img src={IconMusic} alt="Icon Music"/>
                                <PlanText>
                                    <AnnualPlan>
                                        Annual Plan
                                    </AnnualPlan>
                                    <Price>
                                        $59.99/year
                                    </Price>
                                </PlanText>
                            </ItemBox>
                        <ChangeButton>Change</ChangeButton>
                    </InternalPlanBox>
                </PlanBox>
                <ProceedToPayment>
                    <PaymentText>
                        Proceed to Payment
                    </PaymentText>
                </ProceedToPayment>
                <CancelOrder>Cancel Order</CancelOrder>
            </div>
        </Box>
    </>)
}

export default OrderSummary;
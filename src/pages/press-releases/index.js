import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout';
import styled from "styled-components"
import Arrow from '../../components/Icons/Arrow'

const Header = styled.h1`
    text-align: left;
`

const PressWrapper = styled.div`
    width: 100%;
`

const Heading = styled.div`
    text-align: left;
`

const PressItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    margin-bottom: 2vw;

    &:last-child {
        margin-bottom: 10vw;
    }

    .date-small {
        margin: 0;
    }
    .p2 {

        h1 {
            text-decoration: underline;
        }
    }
    img {
        width: 50%;
        margin-left: 50%;
        transform: translateX(-50%);
        padding: 50px 0;
    }
`

const Back = styled.div`

`


const PressPage = (props) => {

    const allPress = props.data.allWordpressPage.edges[0].node.acf.press_releases_page
    return (
        <Layout>

            <Heading className="overviewHeading"><h1>Press releases</h1></Heading>
            <PressWrapper className="OnViewWrapper">
                {allPress.map((press, index) => {
                    return (
                        <PressItem key={index}>
                            <div className="p1">
                                <p className="date-small">{press.date}</p>
                                <h1>{press.title}</h1>
                            </div>
                            <div className="p2">
                                <a href={press.file.source_url} download target="_blank" rel="noopener noreferrer"><h1>PDF</h1></a>
                            </div>
                        </PressItem>
                    )
                })}

            </PressWrapper>
            
            <Back>
                <Link to="/" className="backLink"><h2><Arrow width={100} height={100} /> Back</h2></Link>
            </Back>
        </Layout>
    )
}

export default PressPage

export const pressQuery = graphql`
{
    allWordpressPage(filter: {template: {eq: "template-press-releases.php"}}) {
        edges {
            node {
            id
            template
            acf {
                press_releases_page {
                yearOnly: date(formatString: "YYYY")
                date(formatString: "MMM DD YYYY")
                file {
                    source_url
                }
                title
                }
            }
            }
        }
    }
}
`
import PostTweetForm from "../components/post-tweet-form";
import styled from "styled-components";
import Timeline from "../components/timeline";

export default function Home() {

  return (
    <Wrapper>
      <PostTweetForm />
      <Timeline />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
  overflow-y: scroll;
  grid-template-rows: 1fr 5fr;
`;

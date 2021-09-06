import React from "react";
import * as S from './styled'

const Profile = () => {
  return (
    <S.Wrapper>
    
      <S.WrappeImage src="https://avatars.githubusercontent.com/u/39008435?v=4" alt="Avatar do usuário" />
    
      <S.WrapperInfoUser>
        <div>
          <h1>Nome do usuário</h1>

          <S.WrapperUserName>
            <h3>Username: </h3>
            <a href="http://github.com/pldnz" target="_blank" rel="noreferrer">qualquer coisa</a>
          </S.WrapperUserName>
        </div>

      <S.WrapperStatusCount>
        <div>
          <h4>Followers</h4>
          <span>5</span>
        </div>
        <div>
          <h4>Starred</h4>
          <span>5</span>
        </div>
        <div>
          <h4>Followings</h4>
          <span>5</span>
        </div>
      </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
};

export default Profile;
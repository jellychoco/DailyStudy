{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (statusObj:ResourceLoadState):void=>{
     if(statusObj.state === 'loading') return console.log('👀 loading...')
     if(statusObj.state === 'fail') return console.log(`😱 ${statusObj.reason}`)

     return console.log(`😃 ${statusObj.response.body}`)
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}

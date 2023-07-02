<template>
  <div class="container" style="height: 200vh;">
    <br>
    <div class="row">

      <div class="col-sm-3">
      <side-nav-menu></side-nav-menu>
      </div>


      <div class="col-sm-9">

        <div class="card-shadow">
          <div class="card-body">


            <!--            First row-->
            <!--            Welcome Card-->
            <div class="row">
              <div class="col-sm-12">
                <div class="row">

                  <div class="col-md-6">
                    <div class="row">
                      <div class="form-inline mb-3">
                        <div class="form-group mb-2 mr-5">
                          <span class="ml-4 font-weight-bold lead"
                                style="font-size: 16px; color: black">Welcome, Jack!</span>
                        </div>
                      </div>

                    </div>
                  </div>


                  <div class="col-sm-6">
                    <div class="row justify-content-end">
                      <div class="form-inline mb-3">
                        <div class="form-group mb-2 mr-5">
                          <div class="form-check">
                            <input class="form-check-input ml-2" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label font-weight-normal" for="flexCheckDefault"
                                   style="color: #7b8191">
                              Don't remind me again
                            </label>
                            <font-awesome-icon icon="times" class="ml-2 text-danger"></font-awesome-icon>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="form-inline mb-3">
                        <div class="form-group mb-2 mr-5">
                          <span class="ml-4 font-weight-normal" style="color: #22c45f">Favorites!</span>
                          &nbsp;
                          <span class="font-weight-normal" style="color: #7b8191">You don't have any Favorites yet. Learn how to create one or hide this.
                            Do you want to enable browser notifications? Enable Hide this</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="w-100">
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-md-12">
                    <div class="row">
                      <div class="form-inline mb-3 mt-3">
                        <div class="form-group ml-4 mb-2 mr-5">

                          <div class="circle-icon mr-3">
                            <font-awesome-icon icon="diagram-project" style="font-size: 18px"/>
                          </div>

                          <div class="row ml-0">
                            <div class="col-12">
                              <div class="row">
                                <span class="font-weight-bold">Projects Completed</span>
                              </div>

                              <div class="row">
                                <!--                                <progress value="75" max="100" style="accent-color: lightblue;">75%</progress>-->
                                <!--                                <div class="progress-container">-->
                                <!--                                  <progress value="75" max="100">75%</progress>-->
                                <!--                                </div>-->
                                <!--                                <span class="font-weight-bold ml-3"> 75% </span>-->

                                <div class="form-inline">
                                  <div class="form-group">
                                    <div class="progress-status-1">
                                      <progress value="75" max="100">75%</progress>
                                    </div>
                                  </div>

                                  <div class="form-group">
                                    <span class="font-weight-bold ml-3" style="color: #fea952"> 22% </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                        </div>

                        <div class="form-group ml-2 mb-2 mr-5">

                          <div class="circle-icon mr-3">
                            <font-awesome-icon icon="building" style="font-size: 18px"/>
                          </div>

                          <div class="row ml-0">
                            <div class="col-12">
                              <div class="row">
                                <span class="font-weight-bold">Clients Satisfied</span>
                              </div>

                              <div class="row">

                                <div class="form-inline">
                                  <div class="form-group">
                                    <div class="progress-status-2">
                                      <progress value="75" max="100">75%</progress>
                                    </div>
                                  </div>

                                  <div class="form-group">
                                    <span class="font-weight-bold ml-3" style="color: #ff6161"> 75% </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                        </div>

                        <div class="form-group ml-2 mb-2 mr-5">

                          <div class="circle-icon mr-3">
                            <font-awesome-icon icon="chart-column" style="font-size: 18px"/>
                          </div>

                          <div class="row ml-0">
                            <div class="col-12">
                              <div class="row">
                                <span class="font-weight-bold">High Priorities</span>
                              </div>

                              <div class="row">

                                <div class="form-inline">
                                  <div class="form-group">
                                    <div class="progress-status-3">
                                      <progress value="75" max="100">0%</progress>
                                    </div>
                                  </div>

                                  <div class="form-group">
                                    <span class="font-weight-bold ml-3" style="color: #ff6161"> 0% </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                        </div>

                        <div class="form-group ml-2 mb-2 mr-5">

                          <div class="circle-icon mr-3">
                            <font-awesome-icon icon="clipboard-check" style="font-size: 18px"/>
                          </div>

                          <div class="row ml-0">
                            <div class="col-12">
                              <div class="row">
                                <span class="font-weight-bold">Todo</span>
                              </div>

                              <div class="row">

                                <div class="form-inline">
                                  <div class="form-group">
                                    <div class="progress-status-4">
                                      <progress value="22" max="100">22%</progress>
                                    </div>
                                  </div>

                                  <div class="form-group">
                                    <span class="font-weight-bold ml-3" style="color: #ff6161"> 22% </span>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>


        <!--        Second row-->
        <div class="row mt-3">

          <div class="col-sm-8">
            <div class="card-shadow">
              <div class="card-body">

                <div class="row">
                  <div class="col-sm-12">


                    <!--                    Overview-->
                    <div class="row">
                      <div class="col-sm-3 mt-2">
                        <a class="navbar-brand p-0">
                          <img class="img-avatar" :src="imgAvatar" alt=""
                               style="min-width: 25px; max-width: 100px; height: auto;">
                        </a>
                      </div>

<!--                      <div class="vertical-divider">-->
<!--                        <div class="content-left">-->
<!--                          &lt;!&ndash; Content on the left side of the vertical divider &ndash;&gt;-->
<!--                        </div>-->
<!--                        <div class="content-right">-->
<!--                          &lt;!&ndash; Content on the right side of the vertical divider &ndash;&gt;-->
<!--                        </div>-->
<!--                      </div>-->

                      <div class="col-sm-9 text-left mt-2">
                        <div class="row ml-1">
                          <div class="col">

                            <div class="row">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="font-size:18px;">
                              Jack Zero
                            </span>
                              </div>

                              <div class="col text-right">
                             <span class="p-0 font-weight-bold" style="font-size:18px;">
                              <font-awesome-icon icon="pencil" class="mr-2" style="color: #7b8191; font-size: 15px"/>
                            </span>
                              </div>


                            </div>

                            <div class="row mt-1">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              @zerozerooo
                            </span>
                              </div>
                            </div>

                            <div class="row mt-1">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              Project Manager
                            </span>
                              </div>
                            </div>

                            <div class="row mt-3">
                              <div class="col">
                                <font-awesome-icon icon="graduation-cap" class="mr-2" style="font-size: 15px"/>
                                <span class="p-0 font-weight-bold" style="font-size:12px; color: #5e6577;">
                              Bachelor of Science in Information Technology
                            </span>
                              </div>
                            </div>


                            <div class="row mt-2">
                              <div class="col-sm-4">
                                <font-awesome-icon icon="briefcase" class="mr-2" style="font-size: 15px"/>
                                <span class="p-0 font-weight-bold" style="font-size:12px; color: #5e6577;">
                              12 years exp
                            </span>
                              </div>

                              <div class="col-sm-4">
                                  <span class="p-0 font-weight-bold" style="font-size:12px; color: #5e6577;">
                              Joined
                            </span>
                                <span class="p-0 font-weight-bold" style="font-size:12px; color: #5e6577;">
                              January 1, 2023
                            </span>
                              </div>

                              <div class="col-sm-4">
                                <font-awesome-icon icon="mobile" class="mr-2" style="font-size: 15px"/>
                                <span class="p-0 font-weight-bold" style="font-size:12px; color: #22c45f;">
                              +63 980 908 0039
                            </span>
                              </div>
                            </div>


                          </div>

                        </div>


                      </div>

                    </div>


                    <!--                    separator-->
                    <div class="row mt-3">
                      <hr class="w-100">
                    </div>


                    <!--                    General Detail-->
                    <div class="row ml-2">
                      <div class="col-sm-3 mt-2 text-left">
                        <span class="font-weight-bold">General Details</span>
                      </div>

                      <div class="col-sm-9 text-right mt-2">
                        <div class="row ml-1">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                                <font-awesome-icon icon="pencil" class="mr-2" style="color: #7b8191; font-size: 15px"/>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row ml-2 mt-2">
                      <div class="col-sm-4 mt-2 text-left">
                        <span class="font-weight-normal overview-title-font" style="color: #7b8191">Username</span>
                      </div>

                      <div class="col-sm-8 text-left mt-2">
                        <div class="row ml-1">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              @zerozerooo
                            </span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row ml-2 mt-3">
                      <div class="col-sm-4 mt-2 text-left">
                        <span class="p-0 font-weight-normal overview-title-font" style="color: #7b8191;">
                              Bio
                            </span>
                      </div>

                      <div class="col-sm-8 text-left mt-2">
                        <div class="row ml-1">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              -
                            </span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>


<!--                      <div class="col-sm-8 text-left mt-2">-->
<!--                        <div class="row ml-1">-->
<!--                          <div class="col">-->
<!--                            <div class="row">-->
<!--                              <div class="col">-->
<!--                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">-->
<!--                              Single-->
<!--                            </span>-->
<!--                              </div>-->
<!--                            </div>-->

<!--                          </div>-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </div>-->

                    <div class="row ml-2 mt-3">
                      <div class="col-sm-4 mt-2 text-left">
                        <span class="p-0 font-weight-normal overview-title-font" style="color: #7b8191;">
                              Location
                            </span>
                      </div>

                      <div class="col-sm-8 text-left mt-2">
                        <div class="row ml-1">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              Manila
                            </span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>


                    <div class="row mt-3">
                      <hr class="w-100">
                    </div>


                    <!--                    Professional Status-->
                    <div class="row ml-2">
                      <div class="col-sm-4 mt-2 text-left">
                        <span class="font-weight-bold">Professional Details</span>
                      </div>

                      <div class="col-sm-8 text-right mt-2">
                        <div class="row ml-1">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                                <font-awesome-icon icon="pencil" class="mr-2" style="color: #7b8191; font-size: 15px"/>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row ml-2 mt-2">
                      <div class="col-sm-4 mt-2 text-left">
                        <span class="font-weight-normal overview-title-font" style="color: #7b8191">Role</span>
                      </div>

                      <div class="col-sm-8 text-left mt-2">
                        <div class="row ml-1">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              Project Manager
                            </span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row ml-2 mt-3">
                      <div class="col-sm-4 mt-2 text-left">
                        <span class="font-weight-normal overview-title-font" style="color: #7b8191">Company</span>
                      </div>

                      <div class="col-sm-8 text-left mt-2">
                        <div class="row ml-1">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              -
                            </span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row ml-2 mt-3">
                      <div class="col-sm-4 mt-2 text-left">
                        <span class="p-0 font-weight-normal overview-title-font" style="color: #7b8191;">
                              Country
                            </span>
                      </div>

                      <div class="col-sm-8 text-left mt-2">
                        <div class="row ml-1">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              Philippines
                            </span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row ml-2 mt-3">
                      <div class="col-sm-4 mt-2 text-left">
                        <span class="p-0 font-weight-normal overview-title-font" style="color: #7b8191;">
                              Timezone
                            </span>
                      </div>

                      <div class="col-sm-8 text-left mt-2">
                        <div class="row ml-1">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              -
                            </span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>




                    <div class="row ml-2 mt-3">
                      <div class="col-sm-4 mt-2 text-left">
                        <span class="p-0 font-weight-normal overview-title-font" style="color: #7b8191;">
                             Website Portfolio
                            </span>
                      </div>

                      <div class="col-sm-8 text-left mt-2">
                        <div class="row ml-1">
                          <div class="col">
                            <div class="row">
                              <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              -
                            </span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>


                <!--                Preferences separator-->
                <div class="row mt-3">
                  <hr class="w-100">
                </div>


                <!--                Socials -->
                <div class="row ml-2">
                  <div class="col-sm-3 mt-2 text-left">
                    <span class="font-weight-bold">Social Accounts</span>
                  </div>

                  <div class="col-sm-9 text-right mt-2">
                    <div class="row ml-1">
                      <div class="col">
                        <div class="row">
                          <div class="col">
                            <font-awesome-icon icon="pencil" class="mr-2" style="color: #7b8191; font-size: 15px"/>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div class="row ml-2 mt-2">
                  <div class="col-sm-4 mt-2 text-left">
                    <span class="font-weight-normal overview-title-font"
                          style="color: #7b8191">LinkedIn</span>
                  </div>

                  <div class="col-sm-8 text-left mt-2">
                    <div class="row ml-1">
                      <div class="col">
                        <div class="row">
                          <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              -
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div class="row ml-2 mt-3">
                  <div class="col-sm-4 mt-2 text-left">
                        <span class="p-0 font-weight-normal overview-title-font" style="color: #7b8191;">
                              Twitter
                            </span>
                  </div>

                  <div class="col-sm-8 text-left mt-2">
                    <div class="row ml-1">
                      <div class="col">
                        <div class="row">
                          <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              -
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div class="row ml-2 mt-3">
                  <div class="col-sm-4 mt-2 text-left">
                        <span class="p-0 font-weight-normal overview-title-font" style="color: #7b8191;">
                              Facebook
                            </span>
                  </div>

                  <div class="col-sm-8 text-left mt-2">
                    <div class="row ml-1">
                      <div class="col">
                        <div class="row">
                          <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              -
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div class="row ml-2 mt-3">
                  <div class="col-sm-4 mt-2 text-left">
                        <span class="p-0 font-weight-normal overview-title-font" style="color: #7b8191;">
                              Instagram
                            </span>
                  </div>

                  <div class="col-sm-8 text-left mt-2">
                    <div class="row ml-1">
                      <div class="col">
                        <div class="row">
                          <div class="col">
                             <span class="p-0 font-weight-bold" style="color: #505669; font-size:13px;">
                              -
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>


                <br>

              </div>
            </div>
          </div>


          <div class="col-sm-4">

            <div class="card-shadow">
              <div class="card-body">

                <div class="row">
                  <div class="col-sm-12">
                    <div class="row">

                      <div class="col-12 ml-4">

                        <div class="row">
                          <span class="font-weight-bold">Recently Completed</span>
                        </div>

                        <div class="row">

                          <div class="form-inline">
                            <div class="form-group">
                              <div class="progress-completed">
                                <progress value="75" max="100">100%</progress>
                              </div>
                            </div>

                            <div class="form-group">
                              <span class="font-weight-bold ml-3" style="color: #22c45f"> 100% </span>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>


                    <div class="row">
                      <div class="col-sm-12 mt-2 text-center">
                        <span class="font-weight-bold" style="color: #22c45f">Well Done, Team Zero !</span>
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-sm-12 mt-2 text-center">
                        <img class="img-avatar" :src="teamTaskComplete" alt=""
                             style="min-width: 25px; max-width:200px; height: auto;">
                      </div>
                    </div>


                    <div class="row">
                      <div class="col-sm-12 mt-2 text-left">
                        <span class="font-weight-bold" style="color: #7b8191">Your team has recently completed a task. This calls for a celebration!
                        </span>
                      </div>
                    </div>


                  </div>
                </div>


              </div>
            </div>


            <div class="card-shadow mt-4">
              <div class="card-body">

                <div class="row">
                  <div class="col-sm-12">
                    <div class="row">

                      <div class="col-12 ml-4">

                        <div class="row">
                          <span class="font-weight-bold">Upcoming</span>
                        </div>

                        <div class="row">
                          <div class="col-sm-12 mt-2 text-center">
                            <img class="img-avatar" :src="reminderTask" alt=""
                                 style="min-width: 25px; max-width:200px; height: auto;">
                          </div>
                        </div>

                        <div class="row">

                          <div class="form-inline">
                            <div class="form-group">
                              <div class="progress-upcoming">
                                <progress value="75" max="100">100%</progress>
                              </div>
                            </div>

                            <div class="form-group">
                              <span class="font-weight-bold ml-3" style="color: #fea952"> 50% </span>
                            </div>
                          </div>

                        </div>

                        <div class="row mt-3">

                          <div class="form-inline">
                            <div class="form-group mr-3">
                              <font-awesome-icon icon="chevron-up" style="font-size: 14px"/>
                            </div>

                            <div class="form-group">
                              <span class="font-weight-normal menu-color">In Progress</span>
                            </div>
                          </div>

                        </div>


                      </div>

                    </div>


                    <div class="row">
                      <div class="col-sm-12 mt-2 text-left">
                        <span class="font-weight-bold" style="color: #7b8191">
                          The following project management tasks for
                          <span class="new-primary font-weight-bold">
                            Project 1: System A
                          </span>

                          are pending completion.
                        </span>
                      </div>
                    </div>




                    <div class="row">

                      <div class="col-12 ml-4">

                        <div class="row mt-3">
                          <div class="form-inline">
                            <div class="form-group mr-3">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                              </div>
                            </div>

                            <div class="form-group">
                              <span class="font-weight-normal menu-color">Define project scope and objectives
                                <span class="new-primary font-weight-bold"> </span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="row mt-3">
                          <div class="form-inline">
                            <div class="form-group mr-3">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                              </div>
                            </div>

                            <div class="form-group">
                              <span class="font-weight-normal menu-color">Create detailed project plan
                               <span class="new-primary font-weight-bold"> </span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="row mt-3">
                          <div class="form-inline">
                            <div class="form-group mr-3">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                              </div>
                            </div>

                            <div class="form-group">
                              <span class="font-weight-normal menu-color">Assign tasks and responsibilities
                                <span class="new-primary font-weight-bold"></span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div class="row mt-3">
                          <div class="form-inline">
                            <div class="form-group mr-3">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                              </div>
                            </div>

                            <div class="form-group">
                              <span class="font-weight-normal menu-color">Conduct post-project evaluations
                              <span class="new-primary font-weight-bold"> </span>
                              </span>
                            </div>
                          </div>
                        </div>


                        <div class="row mt-3">
                          <div class="form-inline">
                            <div class="form-group mr-3">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                              </div>
                            </div>

                            <div class="form-group">
                              <span class="font-weight-normal menu-color">Manage project budgets and expenses
                                <span class="new-primary font-weight-bold"></span>
                              </span>
                            </div>
                          </div>
                        </div>


                      </div>

                    </div>


                  </div>
                </div>


              </div>
            </div>


          </div>

        </div>
      </div>

    </div>


  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import imgAvatar from "@/assets/img_avatar.png"
import ultraHD from "@/assets/ultra-hd-video.jpg"
import videoSample from "@/assets/video-sample.png"
import completionBadge from "@/assets/completion-badge.png"
import taskComplete from "@/assets/team-task-complete.jpg"
import teamTaskComplete from "@/assets/teamtask2.png"
import reminderTask from "@/assets/reminder-task.png"

export default {
  name: "User",

  mixins: [],

  data() {
    return {
      imgAvatar: imgAvatar,
      ultraHD: ultraHD,
      videoSample: videoSample,
      completionBadge: completionBadge,
      taskComplete: taskComplete,
      teamTaskComplete: teamTaskComplete,
      reminderTask: reminderTask,

    }
  },


  /** methods**/
  methods: {
    ...mapActions([]),


  },

  /** watch **/
  watch: {},

  /**  computed  **/
  computed: {
    ...mapGetters(
        [],
    ),
  },

  /**  created  **/
  async created() {

  },


}
</script>

<style scoped>

</style>
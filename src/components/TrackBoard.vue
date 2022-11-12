<template>
    <section id="trackboard">
        <!-- Card Layout -->
        <div id="work" class="outer-card">
            <div class="inner-card">
            <div class="activity-menu">
                <h5 class="card-title">Work</h5>
                <img class="ellipsis" src="../assets/icon-ellipsis.svg" alt="" srcset="">
            </div>
            <div class="hours">
                <h1 class="current-hours">32hrs</h1>
                <h6 class="last-week-hours">Lask Week - 36hrs</h6>
            </div>
            </div>
        </div>

        <!-- Card Layout -->
        <div id="play" class="outer-card">
            <div class="inner-card">
                <div class="activity-menu">
                    <h5 class="card-title">Play</h5>
                    <img class="ellipsis" src="../assets/icon-ellipsis.svg" alt="" srcset="">
                </div>
                <div class="hours">
                    <h1 class="current-hours">10hrs</h1>
                    <h6 class="last-week-hours">Lask Week - 8hrs</h6>
                </div>
            </div>
        </div>

        <!-- Card Layout -->
        <div id="study" class="outer-card">
            <div class="inner-card">
                <div class="activity-menu">
                    <h5 class="card-title">Study</h5>
                    <img class="ellipsis" src="../assets/icon-ellipsis.svg" alt="" srcset="">
                </div>
                <div class="hours">
                    <h1 class="current-hours">4hrs</h1>
                    <h6 class="last-week-hours">Lask Week - 7hrs</h6>
                </div>
            </div>
        </div>

        <!-- Card Layout -->
        <div id="exercise" class="outer-card">
            <div class="inner-card">
                <div class="activity-menu">
                    <h5 class="card-title">Exercise</h5>
                    <img class="ellipsis" src="../assets/icon-ellipsis.svg" alt="" srcset="">
                </div>
                <div class="hours">
                    <h1 class="current-hours">4hrs</h1>
                    <h6 class="last-week-hours">Lask Week - 5hrs</h6>
                </div>
            </div>
        </div>

        <!-- Card Layout -->
        <div id="social" class="outer-card">
            <div class="inner-card">
                <div class="activity-menu">
                    <h5 class="card-title">Social</h5>
                    <img class="ellipsis" src="../assets/icon-ellipsis.svg" alt="" srcset="">
                </div>
                <div class="hours">
                    <h1 class="current-hours">5hrs</h1>
                    <h6 class="last-week-hours">Lask Week - 10hrs</h6>
                </div>
            </div>
        </div>

        <!-- Card Layout -->
        <div id="self-care" class="outer-card">
            <div class="inner-card">
                <div class="activity-menu">
                    <h5 class="card-title">Self Care</h5>
                    <img class="ellipsis" src="../assets/icon-ellipsis.svg" alt="" srcset="">
                </div>
                <div class="hours">
                    <h1 class="current-hours">2hrs</h1>
                    <h6 class="last-week-hours">Lask Week - 2hrs</h6>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default{
    name: "TrackBoard"
}
</script>

<style lang="scss">
#trackboard{
    // flex: 65%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px;

    #work{
        background-color: hsl(15, 100%, 70%) !important;
        background-image: url("../assets/icon-work.svg");
        // background-size: ;
        background-repeat: no-repeat;
        background-position: top right;
    }

    #play{
        background-color: hsl(195, 74%, 62%);
        background-image: url("../assets/icon-play.svg");
        background-repeat: no-repeat;
        background-position: top right;
    }

    #study{
        background-color: hsl(348, 100%, 68%);
        background-image: url("../assets/icon-study.svg");
        background-repeat: no-repeat;
        background-position: top right;
    }

    #exercise{
        background-color: hsl(145, 58%, 55%);
        background-image: url("../assets/icon-exercise.svg");
        background-repeat: no-repeat;
        background-position: top right;
    }

    #social{
        background-color: hsl(264, 64%, 52%);
        background-image: url("../assets/icon-social.svg");
        background-repeat: no-repeat;
        background-position: top right;
    }

    #self-care{
        background-color: hsl(43, 84%, 65%);
        background-image: url("../assets/icon-self-care.svg");
        background-repeat: no-repeat;
        background-position: top right;
    }

    .outer-card{
        width: 170px;
        height: 180px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin: 0;
        // background-color: hsl(15, 100%, 70%);
        // opacity: 0.2;
        border-radius: 15px;

        .inner-card{
            * {
                margin: 0;
            }
            display: flex;
            flex-direction: column;
            // justify-content: space-between;
            width: inherit;
            height: 140px;
            background-color: hsl(235, 46%, 20%);
            color: #fff;
            padding: 15px 20px;
            border-radius: 15px;
            margin-top: 40px;

            .activity-menu{
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
                align-items: center;
                // font-weight: 300;

                .card-title{
                    font-size: 14px;
                    font-weight: 400;
                }

                .ellipsis{
                    height: 3.5px;
                    cursor: pointer;
                }
            }

            .hours{
                font-family: Rubik;


                .current-hours{
                    font-size: 2.1em;
                    font-weight: 300;
                }

                .last-week-hours{
                    margin-top: 8px;
                    font-weight: 200;
                }
            }
        }
    }
}
</style>
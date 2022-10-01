PennController.Sequence("consent","init", "instr","practice1","practice2", randomize("2b"),"debrief", "exit" );
PennController.DebugOff();
PennController.ResetPrefix(null);
PennController.SendResults( "send" );
PennController.UploadRecordings("upload");

InitiateRecorder( "https://hjpatt-136.umd.edu/Web_Experiments/Slevc/exp2/PCIbex.php")
    .label("init");
newText("This experiment collects audio recordings. <strong>Once you grant it access to your recording device, you will be notified of whether you are being recorded by a label at the top of the page</strong>");

PennController( "consent" ,
        
        defaultText
            .print()
        ,
        newVar("dataShare")
        ,
        
        newHtml("intro", "Consent-Online.html")
            .settings.radioWarning("Please choose one of the options before continuing")
            .print()
        ,
        
        newText("<br/>")
        ,
        newText("<br/>")
        ,
        
        newButton("By clicking this button I indicate my consent")
            .print()
            .wait()
)
.log( "ParticipantID", PennController.GetURLParameter("id") );

PennController( "instr" ,
        
        defaultText
            .print()
        ,
        
        newText("<p><strong>Experiment Instructions</strong></p>")
        ,
        
        newText("<br/>")
        ,
        newText("<br/>")
        ,
        
        newText("You will see a string of letters. Pronounce this word out loud to the best of your ability and press the SPACE key when you are done.")
        ,
        newText("<p>Now, press the button below for an example.</p>")
        ,
        
        newText("<br/>")
        ,
        newText("<br/>")
        ,
        
        newButton("button", "Continue")
            .print()
            .wait()
);

PennController( "practice1" ,
        
        newCanvas("screen", 800,500)
            .center()
            .print()
        ,
        newTimer("cue", 250)
        ,
        newText("cue", "+")
        ,
        
        getCanvas("screen").add("center at 50%","middle at 50%", getText("cue") )
        ,
        getTimer("cue")
            .start()
            .wait()
         ,
        getCanvas("screen")
            .remove(getText("cue"))
        ,
        newTimer("prime", 200)
        ,
        newText("prime", "STROLLED")
        ,
        getCanvas("screen")
            .add("center at 50%","middle at 50%", getText("prime"))
            ,
        getTimer("prime")
            .start()
            .wait()
        
        ,
    getCanvas("screen")
            .remove(getText("prime"))
        ,
        newText("mask", "&&&&&&&")
        ,
    newTimer("mask", 50)
        ,
       getCanvas("screen")
            .add("center at 50%","middle at 50%", getText("mask"))
            ,
        getTimer("mask")
            .start()
            .wait()
            ,
        getCanvas("screen")
            .remove(getText("mask"))
        ,
 newText("target", "STROLLS")
        ,
       getCanvas("screen")
            .add("center at 50%","middle at 50%", getText("target"))
            ,
newMediaRecorder("practice1_"+PennController.GetURLParameter("id"),"audio")
            .record()
        ,
        
        newKey(" ")
            .wait()
     
        ,
        
        getMediaRecorder("practice1_"+PennController.GetURLParameter("id"))
            .stop()
            // .play()
            // .wait("playback")
        ,
        getCanvas("screen")
.remove(getText("target"))
,
        newText("exp1","<p>So there you saw one string of letters (STROLLED) and then another string of letters (STROLLS)")
        ,
        newText("exp2","You had to say the second string of letters (STROLLS) out loud into your computer's microphone.")
        
        ,
        newText("exp3","<p>Press the button below for another practice trial.</p>")
        ,
        newButton("button", "Continue")
        ,
        getCanvas("screen")
            .add("center at 50%","middle at 25%", getText("exp1"))
            .add("center at 50%","middle at 35%", getText("exp2"))
            .add("center at 50%","middle at 40%", getText("exp3"))
            .add("center at 50%","middle at 75%", getButton("button"))
            .print()
        ,
       
        getButton("button").wait()

);

PennController( "practice2" ,
        
newCanvas("screen", 800,500)
.center()
.print()
,
newTimer("cue", 250)
,
newText("cue", "+")
,

getCanvas("screen").add("center at 50%","middle at 50%", getText("cue") )
,
getTimer("cue")
.start()
.wait()
,
getCanvas("screen")
.remove(getText("cue"))
,
newTimer("prime", 200)
,
newText("prime", "DOVE")
,
getCanvas("screen")
.add("center at 50%","middle at 50%", getText("prime"))
,
getTimer("prime")
.start()
.wait()

,
getCanvas("screen")
.remove(getText("prime"))
,
newText("mask", "&&&&&&&")
,
newTimer("mask", 50)
,
getCanvas("screen")
.add("center at 50%","middle at 50%", getText("mask"))
,
getTimer("mask")
.start()
.wait()
,
getCanvas("screen")
.remove(getText("mask"))
,
newText("target", "BLOAPES")
,
getCanvas("screen")
.add("center at 50%","middle at 50%", getText("target"))
,
newMediaRecorder("practice2_"+PennController.GetURLParameter("id"),"audio")
            .record()
        ,
        newKey(" ")
            .wait()
        ,
        
getMediaRecorder("practice2_"+PennController.GetURLParameter("id"))
            .stop()
        ,
getCanvas("screen")
.remove(getText("target"))
,
newText("exp1","<p>So there you saw one string of letters (DOVE) and then another string of letters (BLOAPES)")
,
newText("exp2","You had to say the second string of letters (BLOAPES) out loud into your computer's microphone")
,
newText("exp3", "That's pretty much it.  There are 500 trials, which will probably take you about 15 minutes to complete.")
,
newText("exp4","<p>Press the button below to begin.</p>")
,
newButton("button", "Continue")
,
getCanvas("screen")
.add("center at 50%","middle at 25%", getText("exp1"))
.add("center at 50%","middle at 35%", getText("exp2"))
.add("center at 50%","middle at 45%", getText("exp3"))
.add("center at 50%","middle at 55%", getText("exp4"))
.add("center at 50%","middle at 75%", getButton("button"))
.print()
,

getButton("button").wait()


);


PennController.Template( "exp2b.csv" ,
    variable => PennController( "2b" ,
    
    newCanvas("screen", 800,500)
    .center()
    .print()
,
newTimer("cue", 250)
,
newText("cue", "+")
,

getCanvas("screen").add("center at 50%","middle at 50%", getText("cue") )
,
getTimer("cue")
    .start()
    .wait()
 ,
 newTimer("trial", 1200)
 ,
 getTimer("trial")
     .start()
 ,
getCanvas("screen")
    .remove(getText("cue"))
,
newTimer("prime", 200)
,
newText("prime", variable.Prime)
,
getCanvas("screen")
    .add("center at 50%","middle at 50%", getText("prime"))
    ,
getTimer("prime")
    .start()
    .wait()

,
getCanvas("screen")
    .remove(getText("prime"))
,
newText("mask", "&&&&&&&")
,
newTimer("mask", 50)
,
getCanvas("screen")
    .add("center at 50%","middle at 50%", getText("mask"))
    ,
getTimer("mask")
    .start()
    .wait()
    ,
getCanvas("screen")
    .remove(getText("mask"))
,
newText("target", variable.Target)
,
getCanvas("screen")
    .add("center at 50%","middle at 50%", getText("target"))

,

newMediaRecorder(variable.Item+"_"+PennController.GetURLParameter("id"),"audio")
            .record()
        ,
        newKey(" ").callback( getTimer("timeout").stop() ).log("all")
        
        ,
        newTimer("timeout", 12000).start().log().wait()
,
        
getKey(" ")
    .disable()
    .test.pressed().success( )

        ,
        
getMediaRecorder(variable.Item+"_"+PennController.GetURLParameter("id"))
            .stop()
        ,
getCanvas("screen")
.remove(getText("target"))
,
newTimer("between", 1500)
    .start()
    .wait()
    )
    .log( "ParticipantID", PennController.GetURLParameter("id") )
    .log("PrimeSent", variable.Prime)
    .log("TargetSent", variable.Target)
);


PennController( "debrief" ,
        defaultText
            .print()
        ,
        
        newText("<p><strong>Thank you for participating!</strong></p>")
        ,
        
        newText("<br/>")
        ,

        newText("<p>This experiment is investigating people's ability to activate certain verb tenses depending on the type of word that appears before it. </p>")
        ,
        newText("<p>Of course, we don’t know the results of this experiment yet as we are still collecting data. However, if <br/>you still have any questions about this experiment, please feel free to contact Dr. Slevc at slevc@umd.edu.</p>")
        ,
        newText("<p>Finally, please don’t share any information about the experiment with other people who <br/>might participate, just in case knowing the goal of the experiment could bias peoples’ responses in some way.</p>")
        ,
        newText('<a href="https://umpsychology.sona-systems.com/webstudy_credit.aspx?experiment_id=1640&credit_token=e20ddf267343402cb3a5fc8a2950eb8f&survey_code='+GetURLParameter('id')+'" rel="nofollow">Click here to confirm participation on SONA</a>.')
            .print()
            .wait()

);


PennController( "exit" ,
        newText("<p>You may now close your browser window.</p>").print()
        ,
        newTimer("dummy", 10)
            .wait() // This will wait forever
);
 

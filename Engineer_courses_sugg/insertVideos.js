const mongoose = require('mongoose');
const Video = require('./models/videoSchema');
const Course = require('./models/course');

mongoose.connect('mongodb+srv://kevin:Kevin123@e-learning.glg6s.mongodb.net/?retryWrites=true&w=majority&appName=e-learning', 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('DB connected for seeding!');

        const videos = [
            // computer science
            //1. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING
            { title: 'ArtificialIntelligence', url: ' https://youtu.be/JMUxmLyrhSk?si=aw4beOXfEvdgwptK', course: 'artificialintelligence',domain :'cse'},
            { title: 'MachineLearning', url: 'https://youtu.be/GwIo3gDZCVQ?si=pQ_WYQuKwBE99bew', course: 'artificialintelligence' ,domain: 'cse'},
            { title: 'NaturalLanguageProcessing', url: 'https://youtu.be/dIUTsFT2MeQ?si=6FhYjWkvdUvPYd-0', course: 'artificialintelligence' ,domain: 'cse'},
            { title: 'ComputerVision', url: 'https://youtu.be/IA3WxTTPXqQ?si=fKKsegfRfGuYl3Li', course: 'artificialintelligence',domain: 'cse' },
            { title: 'PredictiveModeling', url: 'https://youtu.be/dB-JHhEJvQA?si=LNlJ-MPdx2jGgDFQ', course: 'artificialintelligence' ,domain: 'cse'},
            // Mobile app development:
            { title: 'Swift', url: ' https://youtu.be/8Xg7E9shq0U?si=yIVDiF3vs4T1WpYZ', course: 'mobileapp' ,domain :'cse'},
            { title: 'Kotlin', url: 'https://www.youtube.com/watch?v=55NL0vnjjJg', course: 'mobileapp' ,domain :'cse'},
            { title: 'Flutter', url: 'https://www.youtube.com/watch?v=4TFbXepOjLI', course: 'mobileapp', domain :'cse'},
            { title: 'ReactNative', url: ' https://youtu.be/0-S5a0eXPoc?si=8iUfBIXyA24y77st', course: 'mobileapp',domain :'cse' },
            { title: 'Xamarin', url: 'https://www.youtube.com/watch?v=zvp7wvbyceo', course: 'mobileapp',domain :'cse' },
            // Data Science
            { title: 'DataScience', url: ' https://youtu.be/-ETQ97mXXF0?si=JakuxADzHmdYkaG4', course: 'datascience',domain :'cse' },
            { title: 'StatisticsAndProbability', url: 'https://youtu.be/XcLO4f1i4Yo?si=X1XzDB_wh-kqYU8W', course: 'datascience',domain :'cse' },
            { title: 'DataWragling', url: 'https://youtu.be/RWThOMYFsy8?si=-i1zDByFyMM-Hpx7', course: 'datascience',domain :'cse' },
            { title: 'DataVisualization', url: 'https://youtu.be/Eqhq62jkI2U?si=wt0lzV9bSQHF4Cf0', course: 'datascience' ,domain :'cse'},
            { title: 'MachineLearning', url: 'https://youtu.be/GwIo3gDZCVQ?si=pQ_WYQuKwBE99bew', course: 'datascience',domain :'cse' },
            // CYPERSECURITY
            { title: 'NetworkSecurity', url: 'https://www.youtube.com/watch?v=NIRXtMg-0z8', course: 'cypersecurity',domain :'cse' },
            { title: 'EthicalHacking', url: 'https://www.youtube.com/watch?v=3FNYvj2U0HM', course: 'cypersecurity' ,domain :'cse'},
            { title: 'IncidentResponse', url: 'https://youtu.be/dagb12kvr8M?si=6UleaavFagrqog5D', course: 'cypersecurity' ,domain :'cse'},
            { title: 'Cryptography', url: 'https://www.youtube.com/watch?v=j_8PLI_wCVU', course: 'cypersecurity',domain :'cse' },
            //Web development
            { title: 'Html', url: 'https://youtu.be/FYErehuSuuw?si=9n6DU9zZf7YnFjH7', course: 'webdevelopment' ,domain: 'cse'},
            { title: 'Css', url: ' https://youtu.be/vfs1wBDoqBY?si=OEY71ogOJXo1IbQw', course: 'webdevelopment' ,domain: 'cse'},
            { title: 'Js', url: ' https://youtu.be/poo0BXryffI?si=WMcoDkzhI3XUa3rH', course: 'webdevelopment' ,domain: 'cse'},
            { title: 'Nodejs', url: 'https://youtu.be/SdyzXQoQO18?si=284MeXE5tpegmwDY', course: 'webdevelopment',domain: 'cse' },
            { title: 'Python', url: 'https://youtu.be/m67-bOpOoPU?si=By9jNWb7CmEDqJsG', course: 'webdevelopment' ,domain: 'cse'},
            { title: 'Java', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', course: 'webdevelopment' },
            //  SOFTWARE DEVELOPMENT
            { title: 'Java', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', course: 'software',domain :'cse' },
            { title: 'Python', url: 'https://youtu.be/m67-bOpOoPU?si=By9jNWb7CmEDqJsG', course: 'software' ,domain :'cse'},
            { title: 'ProblemSolving', url: 'https://www.youtube.com/watch?v=VTLCoHnyACE&t=367s', course: 'software',domain :'cse' },
            { title: 'VersionControl', url: 'https://youtu.be/VIBWdLLq9kQ?si=d4AaoPB54J0DFV4o', course: 'software' ,domain :'cse'},
            { title: 'SoftwareArchitecture', url: 'https://www.youtube.com/watch?v=ecjnQza6s0k', course: 'software' ,domain :'cse'},
            // CLOUD COMPUTING MANAGEMENT
            { title: 'CloudComputing', url: 'https://www.youtube.com/watch?v=EN4fEbcFZ_E', course: 'cloudcomputing',domain :'cse' },
            { title: 'IaasService', url: 'https://www.youtube.com/watch?v=ztaKUI7cknk', course: 'cloudcomputing',domain :'cse' },
            { title: 'CloudArchitecture', url: ' https://www.youtube.com/live/5gnoVjpfWxU?si=JDFuQTgU6ZBLpFqv', course: 'cloudcomputing' ,domain :'cse'},
            { title: 'Devops', url: 'https://www.youtube.com/watch?v=hQcFE0RD0cQ', course: 'cloudcomputing',domain :'cse' },
            { title: 'Cloudsecurity', url: 'https://www.youtube.com/watch?v=-ObImxw1PmI', course: 'cloudcomputing',domain :'cse' },
            // // DATABASE
            { title: 'MangoDb', url: 'https://www.youtube.com/watch?v=DCOloE011l4', course: 'database' ,domain :'cse'},
            { title: 'Sql', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', course: 'database',domain :'cse' },
            { title: 'NoSql', url: 'https://www.youtube.com/watch?v=xh4gy1lbL2k', course: 'database',domain :'cse' },
            { title: 'DataManagement', url: 'https://www.youtube.com/watch?v=W_VZy4iAR54', course: 'database' ,domain :'cse'},
            { title: 'DatabaseDesign', url: 'https://youtu.be/ztHopE5Wnpc?si=TfvsRTK9ZSrj22Zf', course: 'database' ,domain :'cse'},
            // // // NETWORKING ANDTELECOMMUNICATION
            { title: 'NetworkSecurity', url: 'https://www.youtube.com/watch?v=NIRXtMg-0z8', course: 'networking' ,domain :'cse'},
            { title: 'WirelessNetwork', url: 'https://www.youtube.com/watch?v=zuYiktLqNYQ', course: 'networking',domain :'cse' },
            { title: 'RoutingAndSwitching', url: 'https://youtu.be/y0JRbdzL_NI?si=P-ixopRq-sGIO8KE', course: 'networking',domain :'cse' },
            { title: 'ComputerNetworks', url: 'https://www.youtube.com/watch?v=IPvYjXCsTg8', course: 'networking' ,domain :'cse'},
            { title: 'CommunicationProtocol', url: 'https://www.youtube.com/watch?v=EsZFgm3wGOc&list=PLbGlpmZLQWJcXIxQALk8TjLpAawaij_Rc&index=1', course: 'networking',domain :'cse' },
            // // EMBEDDED SYSTEM
            { title: 'EmbeddedCProgramming', url: 'https://www.youtube.com/watch?v=VM7s1k0s7kk&list=PLzx1ARJOmyed-PYHMduhZDQ4eKXmWJj_T&index=1', course: 'embeddedsystem',domain :'cse' },
            { title: 'MicrocontrollerAndMicroprocessor', url: 'https://www.youtube.com/watch?v=jte2S2iWRMI&list=PLBlnK6fEyqRgyFCCgqdcBowmSp_BTKs4F&index=1', course: 'embeddedsystem' ,domain :'cse'},
            { title: 'RealTimeOperatingSystem', url: 'https://www.youtube.com/watch?v=dHsHP9RrXBw&list=PLJ5C_6qdAvBH-JNRIlupFb44miyx9M8JD&index=1', course: 'embeddedsystem' ,domain :'cse'},
            { title: 'EmbeddedSystemDesign', url: 'https://www.youtube.com/watch?v=TP1_F3IVjBc&list=PLJ5C_6qdAvBEUjcu1ka0QY9G-zoOlXqCL&index=1', course: 'embeddedsystem' ,domain :'cse'},
            { title: 'EmbeddedSystemDesignWithArm', url: 'https://www.youtube.com/watch?v=0xgvINDxXJI&list=PLbRMhDVUMngcJu5oUhgpgYqtOn7DmSfuU&index=1', course: 'embeddedsystem',domain :'cse' },



            // ece
            //Alog And DigitAl Electronics
            { title: 'Analog electronics', url: 'https://youtu.be/7jaa1rlW7Ak?si=ia1JPZlZJIDeKsaO', course: 'Alog And DigitAl Electronics' ,domain :'ece'},
            { title: 'Digital electronics', url: 'https://youtu.be/GCYxq0CITqc?si=gOxkx-3kHxZtpqqQ', course: 'Alog And DigitAl Electronics',domain :'ece' },
            { title: 'Vlsi design:', url: 'https://youtu.be/9Q9yIyNiAJQ?si=BMWkDPdCTJZuX3i5', course: 'Alog And DigitAl Electronics' ,domain :'ece'},
            { title: 'Analog and digital', url: 'https://youtu.be/ZWdT-6Ld71Q?si=dxXOVq43cpraqCZt', course: 'Alog And DigitAl Electronics' ,domain :'ece'},
            { title: 'Signal', url: 'https://youtu.be/M0mx8S05v60?si=9kd6lI0PrwJMl-pe', course: 'Analog And DigitAl Electronics' ,domain :'ece'},

            // networking and communication protocols
            { title: 'networking and communication protocols introduction', url: 'https://youtu.be/OckU_zRNjlY?si=hvY1SYFxvk4_rZWm', course: ' Networking and Communication Protocols',domain :'ece' },
            { title: 'Computer networks', url: 'https://youtu.be/3QhU9jd03a0?si=Ys8qHMCW0W7wwSF0', course: ' Networking and Communication Protocols' ,domain :'ece'},
            { title: 'Network protocols', url: 'https://youtu.be/P6SZLcGE4us?si=fgjkRxrnqg4IO1wc', course: ' Networking and Communication Protocols' ,domain :'ece'},
            { title: 'Network security', url: 'https://youtu.be/NQ1cvwEvh44?si=-xX4VA9kuuv5OkCl', course: ' Networking and Communication Protocols' ,domain :'ece'},
            { title: 'Network basics', url: 'https://youtu.be/_IOZ8_cPgu8?si=5cJ9FotMd-TaFPUW', course: ' Networking and Communication Protocols' ,domain :'ece'},

            // Signal Processing 
            { title: 'Digital signal processing', url: 'https://youtu.be/cIH5o7wYNzs?si=vLltwVeqFp3TEO9I', course: 'Signal Processing',domain :'ece' },
            { title: 'Image and video processing', url: 'https://youtu.be/PXfjUzc-3XA?si=zXNMnkWx_-Of4Eki', course: 'Signal Processing',domain :'ece' },
            { title: 'Speech and audio processing', url: 'https://youtu.be/Xjzm7S__kBU?si=-21k1Qi9UzTThuod', course: 'Signal Processing' ,domain :'ece'},
            { title: 'Speech and audio processing using matlab', url: 'https://youtu.be/O8GlKE2Iu_I?si=-fx_CiE0MUzc2pGh', course: 'Signal Processing' ,domain :'ece'},
            { title: 'Signal processing and machine learning', url: 'https://youtu.be/mexN6d8QF9o?si=0waN9NG9BsMtw7uy', course: 'Signal Processing' ,domain :'ece'},


            // Civil Engineering
            { title: 'System Engineering', url: 'https://youtu.be/IdFjunoHtaw?si=HkHC2hnfs7ZW0auN', course: 'Structured Engineering' ,domain :'civil'},
            { title: 'Project Management Engineering', url: 'https://youtu.be/Bhm4mLoJ48I?si=rGulySfdmCYwu5QO', course: 'Structured Engineering' ,domain :'civil'},
            { title: 'Quality control and assurance', url: 'https://youtu.be/FX02JRVQTss?si=g7uVtwQLNXDHvyU2', course: 'Structured Engineering' ,domain :'civil'},
            { title: 'Design and Simulation tools', url: 'https://youtu.be/dah6mZzrbas?si=-dzzUx7Qf2ydOhTE', course: 'Structured Engineering' ,domain :'civil'},
            { title: 'Sustainability Green Engineering', url: 'https://youtu.be/rGXM_ZqSX4U?si=OPJ2B8zpOekzU9Oc', course: 'Structured Engineering' ,domain :'civil'},
            
            
            { title: 'Soil Mechanics', url: 'https://youtu.be/i--51DBtOGU?si=ysoXMmCPIv7yQbRq', course: 'Geo technical  Engineering' ,domain :'civil'},
            { title: 'Foundation of Engineering', url: 'https://www.youtube.com/live/goAAx3zBTcY?si=aQZ-FLxc7dDz3hRy', course: 'Geo technical  Engineering' ,domain :'civil'},
            { title: 'Slope stability and landslide', url: 'https://youtu.be/urt09bSPEqY?si=y3ZaGK8yvZWEH-1f', course: 'Geo technical  Engineering' ,domain :'civil'},
            { title: 'Ground Improvement techniques', url: 'https://youtu.be/HVzGKUIG2ek?si=RpcQQY7Uq6ob35a0', course: 'Geo technical  Engineering' ,domain :'civil'},
            { title: 'Seismic Geo technical Engineering', url: 'https://youtu.be/g7ga5fWPwss?si=C0sj7y4PK4v6I1du', course: 'Geo technical  Engineering' ,domain :'civil'},


            { title: 'Traffic Engineering Control', url: 'https://www.youtube.com/live/oD59I8tdKSs?si=dIa-5rKO4XIxcYyb', course: 'Transportation Engineering' ,domain :'civil'},
            { title: 'Highway and roadway design', url: 'https://youtu.be/SNKuX5OTICg?si=LLAFkOyePyoClUxr', course: 'Transportation Engineering' ,domain :'civil'},
            { title: 'Pavement engineering', url: 'https://youtu.be/5c-ksLS9_MU?si=G7OBDaAejGnMuNNR', course: 'Transportation Engineering' ,domain :'civil'},
            { title: 'Public Transportation system', url: 'https://youtu.be/wzB8Rhm3xCU?si=uSNJJv-0YOiUKESw', course: 'Transportation Engineering' ,domain :'civil'},
            { title: 'Transportation planning', url: 'https://youtu.be/ImyDIu5PIL8?si=KiZFzur6plamaZKM', course: 'Transportation Engineering' ,domain :'civil'},


            // { title: 'RoutingAndswitching', url: 'https://www.youtube.com/watch?v=videoID4', course: 'Environmental  Engineering' ,domain :'civil'},
            // { title: 'RoutingAndswitching', url: 'https://www.youtube.com/watch?v=videoID4', course: 'Environmental  Engineering' ,domain :'civil'},
            // { title: 'RoutingAndswitching', url: 'https://www.youtube.com/watch?v=videoID4', course: 'Environmental  Engineering' ,domain :'civil'},
            // { title: 'RoutingAndswitching', url: 'https://www.youtube.com/watch?v=videoID4', course: 'Environmental  Engineering' ,domain :'civil'},
            // { title: 'RoutingAndswitching', url: 'https://www.youtube.com/watch?v=videoID4', course: 'Environmental  Engineering' ,domain :'civil'},
            // { title: 'RoutingAndswitching', url: 'https://www.youtube.com/watch?v=videoID4', course: 'Environmental  Engineering' ,domain :'civil'},
            // { title: 'RoutingAndswitching', url: 'https://www.youtube.com/watch?v=videoID4', course: 'Environmental  Engineering' ,domain :'civil'},


];

return Video.insertMany(videos)
    .then(insertedVideos => {
        console.log('Videos inserted successfully!');

        const groupedCourses = videos.reduce((acc, video) => {
            const key = `${video.course}-${video.domain}`;
            if (!acc[key]) {
                acc[key] = {
                    course: video.course,
                    domain: video.domain,
                    videoIds: []
                };
            }
            const videoDoc = insertedVideos.find(v => v.title === video.title);
            if (videoDoc) {
                acc[key].videoIds.push(videoDoc._id);
            }
            return acc;
        }, {});

        const updatePromises = Object.values(groupedCourses).map(group =>
            Course.findOneAndUpdate(
                { name: group.course, domain: group.domain },
                { $push: { videos: { $each: group.videoIds } } },
                { new: true, upsert: true }
            )
        );

        return Promise.all(updatePromises);
    })
    .then(updatedCourses => {
        console.log('Courses updated successfully with videos:', updatedCourses);
        mongoose.connection.close(); 
    })
    .catch(err => {
        console.error('Error inserting videos:', err);
        mongoose.connection.close(); 
    });
});
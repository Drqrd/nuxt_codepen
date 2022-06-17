let data = {
    "bg_url": "https://storage.googleapis.com/generated_audio/backgrounds/8kHz/indoor_house/room_11_8kHz.mp3",
    "bg_volume": 0.54,
    "call_score": 0.9285714285714286,
    "caller_profile": "Aiden",
    "chief_complaint": {
        "ordering": 0,
        "protocol": 26,
        "service": "MEDICAL",
        "text": "26 - Sick Person (Specific Diagnosis)",
        "variables": ""
    },
    "date_assigned": null,
    "date_simulated": "Wed, 29 Dec 2021 21:50:14 GMT",
    "description": "Patient at care center is lethargic, with temp and low oxygen",
    "dispatch_code": {
        "chief_complaint": {
            "ordering": 0,
            "protocol": 26,
            "service": "MEDICAL",
            "text": "26 - Sick Person (Specific Diagnosis)",
            "variables": ""
        },
        "determinant_descriptor": 1,
        "determinant_level": "C",
        "suffix": " "
    },
    "playlist_name": null,
    "scenario_id": 172,
    "scores": [
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/942ef9cc791910327ef9de577ef903a4c8dd5470.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3415-2021-12-29 21:50:14.731812.wav"
            },
            "audio_time": "0:00:00.600000",
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "Great job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Asked Correctly!"
            },
            "index": "6",
            "input": "Is he breathing?",
            "numerator": 1.0,
            "output": "Yes",
            "row_number": 9,
            "score_id": 0,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": 0.9999999330597157,
                "stt_confidence": 0.9489396214485168
            },
            "section": "CE",
            "utterance": "is he breathing",
            "utterance_id": 704
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/d6a51459a50d514e335a8674c84a8f350777c03c.mp3",
                "user": null
            },
            "audio_time": null,
            "call_stats_category": "N/A",
            "denominator": 0.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "All scripted questions must be asked when possible and appropriate.",
                "callSummaryColor": "orange_1",
                "callSummaryText": "Missed question!"
            },
            "index": "1",
            "input": "Is he completely alert (responding appropriately)?",
            "numerator": 0.0,
            "output": "I wouldn't say completely. He has been in and out. And he's been lethargic all day.",
            "row_number": 10,
            "score_id": null,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": null,
                "stt_confidence": null
            },
            "section": "KQ",
            "utterance": null,
            "utterance_id": null
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/12fbb38182b146f6d376f5ba2e1590c8b4371aaf.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3414-2021-12-29 21:50:20.031812.wav"
            },
            "audio_time": "0:00:05.900000",
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "Great job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Asked Correctly!"
            },
            "index": "1",
            "input": "What’s the address of the emergency?",
            "numerator": 1.0,
            "output": "107 Stewarts Ct, room 22",
            "row_number": 1,
            "score_id": 0,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": 0.946325179846618,
                "stt_confidence": 0.8405600786209106
            },
            "section": "CE",
            "utterance": "9911 what's the address of the emergency",
            "utterance_id": 699
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/5e889210f9331ee23e0a5b9c9775ec5ea0f3d273.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3411-2021-12-29 21:50:23.431812.wav"
            },
            "audio_time": "0:00:09.300000",
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "Great job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Asked Correctly!"
            },
            "index": "3a",
            "input": "Are you with the patient now?",
            "numerator": 1.0,
            "output": "No, one of the senior nurses is right now with him.",
            "row_number": 4,
            "score_id": 0,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": 0.948299050825054,
                "stt_confidence": 0.965203583240509
            },
            "section": "CE",
            "utterance": "are you with a patient now",
            "utterance_id": 702
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/66d56c40818312f8ca874b611f7cb88eae2c54fb.mp3",
                "user": null
            },
            "audio_time": null,
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "The answer to this question was previously explicitly given by the caller, so you are not required to ask this question. Good job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Obvious question."
            },
            "index": "3b",
            "input": "How many (other) people are hurt/sick?",
            "numerator": 1.0,
            "output": "It is just him",
            "row_number": 5,
            "score_id": 7,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": null,
                "stt_confidence": null
            },
            "section": "CE",
            "utterance": null,
            "utterance_id": null
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/ae34e6277143098f16d38f8df9f007d9be0fe618.mp3",
                "user": null
            },
            "audio_time": null,
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "The answer to this question was previously explicitly given by the caller, so you are not required to ask this question. Good job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Obvious question."
            },
            "index": "4",
            "input": "How old is he?",
            "numerator": 1.0,
            "output": "He's 67",
            "row_number": 6,
            "score_id": 7,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": null,
                "stt_confidence": null
            },
            "section": "CE",
            "utterance": null,
            "utterance_id": null
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/d8fe2019aa090db2480c8ca9d66d17af8d06f1b5.mp3",
                "user": null
            },
            "audio_time": null,
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "The answer to this question was previously explicitly given by the caller, so you are not required to ask this question. Good job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Obvious question."
            },
            "index": "4a",
            "input": "Is the patient Male or Female?",
            "numerator": 1.0,
            "output": "Male",
            "row_number": 7,
            "score_id": 7,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": null,
                "stt_confidence": null
            },
            "section": "CE",
            "utterance": null,
            "utterance_id": null
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/77a88384094887eb00f72abd990da3dd24476e6d.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3409-2021-12-29 21:50:26.131812.wav"
            },
            "audio_time": "0:00:12",
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "Great job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Asked Correctly!"
            },
            "index": "2",
            "input": "What’s the phone number you’re calling from?",
            "numerator": 1.0,
            "output": "484-924-8599",
            "row_number": 2,
            "score_id": 0,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": 0.9999999221138471,
                "stt_confidence": 0.9292742013931274
            },
            "section": "CE",
            "utterance": " what's the phone number you're calling from",
            "utterance_id": 700
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/a9a1f41c3b33776de3f398808911a641aaa5b81f.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3420-2021-12-29 21:50:26.931812.wav"
            },
            "audio_time": "0:00:12.800000",
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "Great job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Asked Correctly!"
            },
            "index": "2",
            "input": "Is he breathing normally?",
            "numerator": 1.0,
            "output": "No, he's got kind of a labored breathing.",
            "row_number": 11,
            "score_id": 0,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": 0.999999875379214,
                "stt_confidence": 0.933614194393158
            },
            "section": "KQ",
            "utterance": " is he breathing normally",
            "utterance_id": 705
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/e67436ef6512be5cde5c528a5d1fc3f938bba197.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3424-2021-12-29 21:50:27.331812.wav"
            },
            "audio_time": "0:00:13.200000",
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "Great job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Asked Correctly!"
            },
            "index": "5",
            "input": "Is he awake (conscious)?",
            "numerator": 1.0,
            "output": "Yeah. And he's a bit cold. By the way, there's a possibility that he may have aspirated his vomit, I guess it was yesterday. He vomited, and had some diarrhea this morning too.",
            "row_number": 8,
            "score_id": 0,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": 0.8503533216399032,
                "stt_confidence": 0.9183734059333801
            },
            "section": "CE",
            "utterance": " is he awake",
            "utterance_id": 703
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/9e708afaff5b7af8c94bdab47cbbdd66abe47b73.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3413-2021-12-29 21:50:31.131812.wav"
            },
            "audio_time": "0:00:17",
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "Great job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Asked Correctly!"
            },
            "index": "3",
            "input": "Is he bleeding or vomiting blood?",
            "numerator": 1.0,
            "output": "No.",
            "row_number": 12,
            "score_id": 0,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": 0.9999998979471556,
                "stt_confidence": 0.8855373859405518
            },
            "section": "KQ",
            "utterance": " is he bleeding or vomiting blood",
            "utterance_id": 706
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/ed77c9bcc615128e611128b8efd12e91074e8f6d.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3418-2021-12-29 21:50:34.231812.wav"
            },
            "audio_time": "0:00:20.100000",
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "Great job!",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Asked Correctly!"
            },
            "index": "3",
            "input": "Okay, tell me exactly what happened.",
            "numerator": 1.0,
            "output": "I have a gentleman here. He is.. let me check that right now, one sec... I think he is sixty, 4.. 67 sorry, 67. He's responsive but he's got a temp of a hundred and one. He's sweating profusely, his heart rate is 99.",
            "row_number": 3,
            "score_id": 0,
            "scores": {
                "curr_score": 1.0,
                "response_confidence": 1.0000000864546283,
                "stt_confidence": 0.9799913763999939
            },
            "section": "CE",
            "utterance": " okay tell me exactly what happened",
            "utterance_id": 701
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/133df73cd2de1ef5d575a1a5ca416305afb25374.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3417-2021-12-29 21:50:37.931812.wav"
            },
            "audio_time": "0:00:23.800000",
            "call_stats_category": "Incorrect",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "Remember that all questions must be read as written in the protocol script.",
                "callSummaryColor": "orange_3",
                "callSummaryText": "Question was asked incorrectly."
            },
            "index": "4",
            "input": "Does he have any pain?",
            "numerator": 0.0,
            "output": "I don't know. No one mentioned that.",
            "row_number": 13,
            "score_id": 1,
            "scores": {
                "curr_score": 0.9166666666666666,
                "response_confidence": 0.8407153607855722,
                "stt_confidence": 0.8338221907615662
            },
            "section": "KQ",
            "utterance": " does he have to pay any pain",
            "utterance_id": 707
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/8934dbdf4d846a7935fb81d947bbc294e84cddd4.mp3",
                "user": null
            },
            "audio_time": null,
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "This question did not need to be asked because the caller clearly provided the corresponding information or it didn't apply.",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Additional information/clarification."
            },
            "index": "5",
            "input": "Ø  Is \"primary problem\" one of the listed ALPHA-level NON-PRIORITY complaints (2–12)?",
            "numerator": 1.0,
            "output": "He's been feeling really bad.",
            "row_number": 14,
            "score_id": 11,
            "scores": {
                "curr_score": 0.9230769230769231,
                "response_confidence": null,
                "stt_confidence": null
            },
            "section": "KQ",
            "utterance": null,
            "utterance_id": null
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/e0cb817c9954dcfa9717080e9671fc98a500fa05.mp3",
                "user": null
            },
            "audio_time": null,
            "call_stats_category": "Correct",
            "denominator": 1.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "This question did not need to be asked because the caller clearly provided the corresponding information or it didn't apply.",
                "callSummaryColor": "blue_3",
                "callSummaryText": "Additional information/clarification."
            },
            "index": "6",
            "input": "Ø  Enter your level of coronavirus illness concern:",
            "numerator": 1.0,
            "output": "None",
            "row_number": 15,
            "score_id": 11,
            "scores": {
                "curr_score": 0.9285714285714286,
                "response_confidence": null,
                "stt_confidence": null
            },
            "section": "KQ",
            "utterance": null,
            "utterance_id": null
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/c5f54ed69137c0f0951c5f772ac55d7902ce8179.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3419-2021-12-29 21:50:51.831812.wav"
            },
            "audio_time": "0:00:37.700000",
            "call_stats_category": "None",
            "denominator": 0.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "You provided a necessary DLS instruction. Good job\n**Scoring not yet available for this section",
                "callSummaryColor": "gray_1",
                "callSummaryText": "This instruction has been given**"
            },
            "index": "1",
            "input": "I'm sending the paramedics (ambulance) to help you now. Stay on the line and I'll tell you exactly what to do next.",
            "numerator": 0.0,
            "output": "Thank you.",
            "row_number": 16,
            "score_id": 14,
            "scores": {
                "curr_score": 0.9285714285714286,
                "response_confidence": 0.8765799389629316,
                "stt_confidence": 0.9077054262161255
            },
            "section": "DLS",
            "utterance": " I'm sending the paramedics to help you now stay in the line until you exactly what to do next",
            "utterance_id": 708
        },
        {
            "audio": {
                "ai": "https://storage.googleapis.com/generated_audio/shared/Aiden/calm/85e644d0af0c2cd43553c6b2b11634fd33217ac2.mp3",
                "user": "https://storage.googleapis.com/sim_audio/31YQ0pwgiZchO0cvyR9ze5Hz6hC2-3423-2021-12-29 21:51:00.531812.wav"
            },
            "audio_time": "0:00:46.400000",
            "call_stats_category": "None",
            "denominator": 0.0,
            "feedback": {
                "callDetailsColor": "gray_2",
                "callDetailsText": "You provided a necessary DLS instruction. Good job\n**Scoring not yet available for this section",
                "callSummaryColor": "gray_1",
                "callSummaryText": "This instruction has been given**"
            },
            "index": "1",
            "input": "(Reassure him that help is on the way.)(3rd party) If you get more information, or if anything gets worse in any way, call us back for further instructions.If you get more information, or if anything gets worse in any way, call us back for further instructions.(4th party) If you get more information, or if anything changes, please notify us.If you get more information, or if anything changes, please notify us.",
            "numerator": 0.0,
            "output": "Ok. I will do that.",
            "row_number": 17,
            "score_id": 14,
            "scores": {
                "curr_score": 0.9285714285714286,
                "response_confidence": 0.6391984507113111,
                "stt_confidence": 0.8872108459472656
            },
            "section": "DLS",
            "utterance": " reassure him that help is on the way she'll get more information and raise anything gets worse in any way call us back immediately for further instructions",
            "utterance_id": 709
        }
    ],
    "tenant_name": "International Academies of Emergency Dispatch",
    "user_name": "Mariana G Prince"
}

export default data;
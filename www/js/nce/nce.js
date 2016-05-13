//填充数据
window.onload = function () {
	// page title
	document.getElementById('page-title').innerText = json_data.page_title;
	// audio
	var audio_url = document.getElementById('audio-url');
	var audio_li = document.createElement("li");
	var audio_a = document.createElement("a");
	audio_a.innerHTML = json_data.audio.desc;
	audio_a.href = json_data.audio.url;
	audio_li.appendChild(audio_a);
	audio_url.appendChild(audio_li);
	// content title
	var content = document.getElementById('content');
	var title = document.createElement("p");
	title.innerText = json_data.title.english;
	title.className = 'title';
	content.appendChild(title);
	var title_translate = document.createElement("p");
	title_translate.innerText = json_data.title.translate;
	title_translate.className = 'title-translate';
	content.appendChild(title_translate);
	var title_image_p = document.createElement("p");
	var title_image = document.createElement("img");
	title_image.src = json_data.title.image;
	title_image.className = 'title-image';
	title_image_p.appendChild(title_image);
	content.appendChild(title_image_p);
	// content
	for (var index in json_data.dialogs) {
		createDialog(json_data.dialogs[index]);
	}
};

function createDialog(dialog) {
	var content = document.getElementById('content');
	// content
	var content_p = document.createElement("p");
	var content_speaker_span = document.createElement("span");
	content_speaker_span.className = 'speaker';
	content_speaker_span.innerText = dialog.speaker;
	var content_sentence_span = document.createElement("span");
	content_sentence_span.className = 'sentence';
	content_sentence_span.innerText = dialog.sentence;
	var content_chinese_p = document.createElement("p");
	content_chinese_p.className = 'chinese';
	content_chinese_p.innerText = dialog.translate;
	content_p.appendChild(content_speaker_span);
	content_p.appendChild(content_sentence_span);
	content.appendChild(content_p);
	content.appendChild(content_chinese_p);
}


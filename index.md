---
layout: default
---

{% include header.html %}
{% include navigation.html %}

<div class="content-wrapper">
    <section id="education" class="section">
        <div class="section-header">
            <h2 class="section-title">Background</h2>
        </div>
        <div class="about-row">
            {% include education.html %}
            {% include experience.html %}
        </div>
    </section>
    
    {% include competencies.html %}
    {% include business-impact.html %}
</div>
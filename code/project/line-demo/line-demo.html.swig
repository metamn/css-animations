<section class="line-demo">
  <h3>Line demo</h3>

  <article class="line-demo--horizontal">
    <h3>Horizontal</h3>
    {% set line_count = 20 %}
    {% include '../../framework/behavior/lines/lines.html.swig' %}
  </article>

  <article class="line-demo--vertical">
    <h3>Vertical</h3>
    {% set line_count = 30 %}
    {% include '../../framework/behavior/lines/lines.html.swig' %}
  </article>
</section>

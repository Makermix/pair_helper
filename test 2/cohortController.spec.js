describe('when displaying cohort', function() {

    describe ('CohortController', function () {
        beforeEach(module('MakerMix'));

        beforeEach(inject(function($controller) {
            ctrl = $controller('CohortController');
        }));
        var ctrl;

        describe('when displaying the page', function() {
            var httpBackend;
            beforeEach(inject(function($httpBackend) {
                httpBackend = $httpBackend
                httpBackend
                    .when("GET", "https://makermix.herokuapp.com/cohorts/1")
                    .respond(
                      {items: items}
                    );
            }));

            var items = [
                {"id": 1,
                    individuals : [
                    {
                        "name": "James"
                    },
                    {
                        "name": "Rich"
                    }]
                }
            ];

            it('receives the cohort list', function() {
                httpBackend.flush();
                expect(ctrl.cohort.items).toEqual(items);
            });
        });

    });

});
